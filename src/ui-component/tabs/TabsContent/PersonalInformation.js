import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useTheme } from '@mui/material/styles';
import useScriptRef from 'hooks/useScriptRef';
import user from '../../../assets/images/users/user-round.svg';

const PersonalInformation = () => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box sx={{ width: '500px' }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          {/* Avatar */}

          <Avatar alt="User Avatar" src={user} sx={{ width: 80, height: 80, cursor: 'pointer  ' }} />
        </Box>
        {/* BUTTONS  */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
          {/* Delete Button */}
          <AnimateButton>
            <Button
              disableElevation
              size="small"
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                background: 'linear-gradient(269.64deg, #FF1744 0%, #FF5252 99.15%)',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'background 0.3s',
                '&:hover': {
                  background: 'linear-gradient(269.64deg, #C62828 0%, #D32F2F 99.15%)'
                }
              }}
            >
              Delete
            </Button>
          </AnimateButton>

          {/* Upload Button */}
          <AnimateButton >
            <Button
              disableElevation
              size="small"
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                background: 'linear-gradient(269.64deg, #7000FF 0%, #7000FF 0.01%, #A658F5 99.15%)',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'background 0.3s',
                '&:hover': {
                  background: 'linear-gradient(269.64deg, #511DE9 0%, #511DE9 0.01%, #8440FF 99.15%)'
                }
              }}
            >
              Upload
            </Button>
          </AnimateButton>
        </Box>

        <Box>
          {/* ADD AVATAR  */}

          {/* ADD USERNAME  */}
        </Box>
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
              <Box sx={{ borderTop: '2px solid #999fa1', marginTop: '30px', marginBottom: '20px' }}></Box>

              {/* Username field */}
              <FormControl fullWidth error={Boolean(touched.username && errors.username)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-username"
                  type="text"
                  value={values.username}
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Username"
                  inputProps={{}}
                />
                {touched.username && errors.username && (
                  <FormHelperText error id="standard-weight-helper-text-username">
                    {errors.username}
                  </FormHelperText>
                )}
                <Box sx={{ borderTop: '2px solid #999fa1', marginTop: '30px' }}></Box>
              </FormControl>

              {/* Surname field */}
              <FormControl fullWidth error={Boolean(touched.surname && errors.surname)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-surname">Surname</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-surname"
                  type="text"
                  value={values.surname}
                  name="surname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Surname"
                  inputProps={{}}
                />
                {touched.surname && errors.surname && (
                  <FormHelperText error id="standard-weight-helper-text-surname">
                    {errors.surname}
                  </FormHelperText>
                )}
                <Box sx={{ borderTop: '2px solid #999fa1', marginTop: '30px' }}></Box>
              </FormControl>

              {/* Email field */}
              <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Email"
                  inputProps={{}}
                />
                {touched.email && errors.email && (
                  <FormHelperText error id="standard-weight-helper-text-email">
                    {errors.email}
                  </FormHelperText>
                )}
                <Box sx={{ borderTop: '2px solid #999fa1', marginTop: '30px' }}></Box>
              </FormControl>
              {/* PASSWORD  */}
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
              {/* GRADE  */}
              <FormControl fullWidth error={Boolean(touched.grade && errors.grade)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-grade">Grade</InputLabel>
                <Select
                  id="outlined-adornment-grade"
                  value={values.grade}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        background: 'linear-gradient(269.64deg, #7000FF 0%, #7000FF 0.01%, #A658F5 99.15%)'
                      }
                    }
                  }}
                  sx={{ ...theme.typography.customInput }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Grade"
                >
                  <MenuItem value="">Select Grade</MenuItem>
                  <MenuItem value="grade1">Grade 1</MenuItem>
                  <MenuItem value="grade2">Grade 2</MenuItem>
                  <MenuItem value="grade3">Grade 3</MenuItem>
                  {/* Add more grades as needed */}
                </Select>
                {touched.grade && errors.grade && (
                  <FormHelperText error id="standard-weight-helper-text--grade">
                    {errors.grade}
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
                    Update
                  </Button>
                </AnimateButton>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default PersonalInformation;
