import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  // Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography
  // useMediaQuery
} from '@mui/material';

import * as Yup from 'yup';
import { Formik } from 'formik';
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const FirebaseLogin = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const navigate  = useNavigate()
  const [checked, setChecked] = useState(true);
  const [selectedRole, setSelectedRole] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}></Grid>
      </Grid>

      <Formik
        initialValues={{
          emailaddress: '',
          password: '',
          role: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          emailaddress: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          role: Yup.string().required('Role is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          // try {
          //   console.log(values, 'values');
          //   if (scriptedRef.current) {
          //     setStatus({ success: true });
          //     setSubmitting(false);
          //   }
          // } catch (err) {
          //   console.error(err);
          //   if (scriptedRef.current) {
          //     setStatus({ success: false });
          //     setErrors({ submit: err.message });
          //     setSubmitting(false);
          //   }
          // }
          try {
            console.log(values, 'values');
            const response = await axios.post('http://localhost:8080/api/v1/user/userLogin', values, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
    
            const data = response.data;
            console.log(data, 'USERSIGNUP');
            // Save user data to local storage
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.accessToken);
    
            // Redirect to login page
            navigate('/');
    
            // Show success toast
            toast.success(data.message || 'Logged in successfully.', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light'
            });
            console.log(data, 'LOGIN');
          } catch (error) {
            // Handle error
            console.error('Error while logging in user:', error);
    
            // Show error toast
            toast.error(error.response.data.error.message || 'Error while logging in user.', {
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
            <FormControl fullWidth error={Boolean(touched.emailaddress && errors.emailaddress)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.emailaddress}
                name="emailaddress"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address "
                inputProps={{}}
              />
              {touched.emailaddress && errors.emailaddress && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.emailaddress}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            {/* Role select field */}
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth error={Boolean(touched.role && errors.role)} sx={{ ...theme.typography.customInput }}>
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

            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    sx={{
                      '&.Mui-checked': {
                        color: '#7B12FD'
                      }
                    }}
                    color="primary"
                  />
                }
                label="Remember me"
                sx={{
                  color: 'black'
                }}
              />
              <Link to="/auth/forgot-password">
                <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer', color: '#7B12FD' }}>
                  Forgot Password?
                </Typography>
              </Link>
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{
                    background: 'linear-gradient(269.64deg, #7000FF 0%, #7000FF 0.01%, #A658F5 99.15%)',
                    color: '#fff', // Text color
                    padding: '10px 20px', // Padding
                    borderRadius: '5px', // Border radius
                    '&:hover': {
                      background: 'linear-gradient(269.64deg, #7000FF 0%, #7000FF 0.01%, #A658F5 99.15%)' // Gradient on hover
                    }
                  }}
                >
                  Login
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
