import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

import * as Yup from 'yup';
import { Formik } from 'formik';
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          role: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          role: Yup.string().required('Role is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            console.log(values, 'values');
            const response = await axios.post(
              'http://localhost:8080/api/v1/user/forgetuserPassword',
              {
                emailaddress: values.email,
                role: values.role
              },
              {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );

            const data = response.data;
            localStorage.setItem('forget', JSON.stringify(values));
            // Redirect to login page
            navigate('/auth/otp');

            // Show success toast
            toast.success(data.message || 'OTP sent successfully.', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light'
            });
            console.log(data, 'SENDOTP');
          } catch (error) {
            // Handle error
            console.error('Error while logging in user:', error);

            // Show error toast
            toast.error(error.response.data.data || 'Error while logging in user.', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light'
            });
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">Enter Your Email Address</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address "
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            {/* ROLE FIELD  */}
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth error={Boolean(touched.role && errors.role)}>
                <InputLabel id="role-label">Select Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  name="role"
                  label="Select Role"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem sx={{ color: 'gray' }} value="">
                    Select Role
                  </MenuItem>
                  <MenuItem sx={{ color: 'gray' }} value="student">
                    Student
                  </MenuItem>
                  <MenuItem sx={{ color: 'gray' }} value="teacher">
                    Teacher
                  </MenuItem>
                  <MenuItem sx={{ color: 'gray' }} value="parent">
                    Parent
                  </MenuItem>
                </Select>
                {touched.role && errors.role && <FormHelperText error>{errors.role}</FormHelperText>}
              </FormControl>
            </Grid>
            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Send OTP
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ForgotPassword;
