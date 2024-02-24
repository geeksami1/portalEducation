import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useState } from 'react';
import AnimateButton from 'ui-component/extended/AnimateButton';
// material-ui
import { useTheme } from '@mui/material/styles';
import useScriptRef from 'hooks/useScriptRef';
import { Link } from 'react-router-dom';
import user from '../../../assets/images/users/user-round.svg';

const Password = () => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const username = JSON.parse(localStorage.getItem('user'));
  const firstName = username?.fname;
  const lastName = username?.lname;

  return (
    <>
      <Box sx={{ width: '500px' }}>
        <Box display="flex" alignItems="center" justifyContent={'center'}>
          <Avatar alt="User Avatar" src={user} />
          <Box ml={1}>
            {' '}
            {/* Adjust margin as needed */}
            {/* Your content */}
            <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '18px', color: '#000' }}>
              {username ? `${firstName} ${lastName}` : 'User Name'}
            </Typography>
          </Box>
        </Box>
        <Box></Box>
        <Formik
          initialValues={{
            password: '',
            newPassword: '',
            confirmPassword: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            password: Yup.string().max(255).required('Password is required'),
            newPassword: Yup.string().max(255).required('New Password is required'),
            confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              console.log(values, 'values');
              if (scriptedRef.current) {
                setStatus({ success: true });
                setSubmitting(false);
              }
            } catch (err) {
              console.error(err);
              if (scriptedRef.current) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Box sx={{ borderTop: '2px solid #999fa1', marginTop: '30px', marginBottom: '30px' }}></Box>
              {/* OLD PASSWORD  */}
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
                <Box sx={{ borderTop: '2px solid #999fa1', marginTop: '30px' }}></Box>
              </FormControl>
              {/* NEW PASSWORD  */}
              <FormControl fullWidth error={Boolean(touched.newPassword && errors.newPassword)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-new-password-login">New Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-new-password-login"
                  type={showPassword ? 'text' : 'password'}
                  value={values.newPassword}
                  name="newPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle new password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="New Password"
                  inputProps={{}}
                />
                {touched.newPassword && errors.newPassword && (
                  <FormHelperText error id="standard-weight-helper-text-new-password-login">
                    {errors.newPassword}
                  </FormHelperText>
                )}
                <Box sx={{ borderTop: '2px solid #999fa1', marginTop: '30px' }}></Box>
              </FormControl>
              {/* RE-ENTER NEW  PASSWORD  */}
              <FormControl
                fullWidth
                error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="outlined-adornment-confirm-password-login">Re-enter New Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirm-password-login"
                  type={showPassword ? 'text' : 'password'}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirm password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Re-enter New Password"
                  inputProps={{}}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <FormHelperText error id="standard-weight-helper-text-confirm-password-login">
                    {errors.confirmPassword}
                  </FormHelperText>
                )}
              </FormControl>
              {/* BUTTON  */}
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
                      color: '#fff',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      transition: 'background 0.3s',
                      '&:hover': {
                        background: 'linear-gradient(269.64deg, #511DE9 0%, #511DE9 0.01%, #8440FF 99.15%)'
                      }
                    }}
                  >
                    Change Password
                  </Button>
                </AnimateButton>
              </Box>
              {/* FORGOT PASSWORD  */}
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                <Link to="/auth/forgot-password" style={{ textDecoration: 'none' }}>
                  <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer', color: '#7B12FD' }}>
                    Forgot Password?
                  </Typography>
                </Link>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Password;
