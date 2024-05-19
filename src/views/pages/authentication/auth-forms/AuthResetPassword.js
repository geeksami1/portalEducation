import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';

import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const ResetPassword = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const forget = localStorage.getItem('forget');
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const role = forget ? JSON.parse(forget).role : '';
  const email = forget ? JSON.parse(forget).email : '';
  return (
    <>
      <Formik
        initialValues={{
          newpassword: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          newpassword: Yup.string().required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            console.log(values, 'values');
            const response = await axios.post(
              'http://localhost:8080/api/v1/user/resetpassword',
              {
                emailaddress: email,
                role: role,
                newpassword: values.newpassword
              },
              {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );

            const data = response.data;

            // Redirect to login page
            navigate('/auth/login');


            // Show success toast
            toast.success(data.message || 'Reset password successfully.', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light'
            });
            console.log(data, 'Reset password');
          } catch (error) {
            // Handle error
            console.error('Error while resetting password:', error);

            // Show error toast
            toast.error(error.response.data.error.message || 'Error while resetting password.', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light'
            });
          } finally {
            localStorage.removeItem('forget');
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.newpassword && errors.newpassword)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-newpassword-login">Enter New Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-newpassword-login"
                type={showPassword ? 'text' : 'password'}
                value={values.newpassword}
                name="newpassword"
                onBlur={handleBlur}
                onChange={handleChange}
                label="New Password"
                endAdornment={
                  <InputAdornment position="end">
                    {showPassword ? (
                      <VisibilityOff onClick={handleTogglePasswordVisibility} />
                    ) : (
                      <Visibility onClick={handleTogglePasswordVisibility} />
                    )}
                  </InputAdornment>
                }
                inputProps={{}}
              />
              {touched.newpassword && errors.newpassword && (
                <FormHelperText error id="standard-weight-helper-text-newpassword-login">
                  {errors.newpassword}
                </FormHelperText>
              )}
            </FormControl>

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Reset Password
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ResetPassword;
