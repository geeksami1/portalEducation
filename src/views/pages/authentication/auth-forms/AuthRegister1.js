import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  IconButton,
  OutlinedInput,
  useMediaQuery,
  Select,
  MenuItem
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUser } from 'store/actions';

const AuthRegister1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state?.user.user);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      grade: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
      role: Yup.string().required('Role is required'),
      grade: Yup.string().test('conditionalGrade', 'Grade is required for student or parent', function (value) {
        const role = this.parent.role;
        if (['student', 'parent'].includes(role)) {
          return !!value; // Return true if grade is provided, false otherwise
        }
        return true; // Return true for other roles where grade is not required
      })
    }),
    onSubmit: (values) => {
      console.log('Submitted values:', values);
      localStorage.setItem('user', JSON.stringify(values));
      dispatch(setUser(values));
      //   CONDITIONALLY DEAL WITH THE REDIRECT IF USER ROLE IS STUDENT THEN GO TO STUDENT DASHBOARD ELSE GO TO TEACHER DASHBOARD
      if (values.role === 'student') {
        navigate('/dashboard/default');
      } else {
        navigate('/dashboard/teacher');
      }
    }
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={matchDownSM ? 0 : 2}>
        {/* FULL NAME FIELD  */}
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth error={Boolean(formik.touched.fullname && formik.errors.fullname)}>
            <InputLabel htmlFor="outlined-adornment-firstName-register">Full Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-firstName-register"
              fullWidth
              label="Full Name"
              margin="dense"
              name="fullname"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullname}
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <FormHelperText error id="standard-weight-helper-text--register">
                {formik.errors.fullname}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        {/* EMAIL FIELD  */}
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth error={Boolean(formik.touched.email && formik.errors.email)}>
            <InputLabel htmlFor="outlined-adornment-email-register">Email Address</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email-register"
              fullWidth
              label="Email Address"
              margin="dense"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <FormHelperText error id="standard-weight-helper-text--register">
                {formik.errors.email}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        {/* PASSWORD FIELD  */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={Boolean(formik.touched.password && formik.errors.password)}>
            <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-register"
              fullWidth
              label="Password"
              margin="dense"
              name="password"
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleTogglePasswordVisibility} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {formik.touched.password && formik.errors.password && (
              <FormHelperText error id="standard-weight-helper-text--register">
                {formik.errors.password}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        {/* CONFIRM PASSWORD FIELD */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}>
            <InputLabel htmlFor="outlined-adornment-confirmPassword-register">Confirm Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirmPassword-register"
              fullWidth
              label="Confirm Password"
              margin="dense"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleToggleConfirmPasswordVisibility} edge="end">
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <FormHelperText error id="standard-weight-helper-text--register">
                {formik.errors.confirmPassword}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        {/* ROLE FIELD  */}
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth error={Boolean(formik.touched.role && formik.errors.role)}>
            <InputLabel id="role-label">Select Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              name="role"
              label="Select Role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
            {formik.touched.role && formik.errors.role && <FormHelperText error>{formik.errors.role}</FormHelperText>}
          </FormControl>
        </Grid>

        {/* GRADE FIELD (Displayed if role is student or parent) */}
        {['student', 'parent'].includes(formik.values.role) && (
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth error={Boolean(formik.touched.grade && formik.errors.grade)}>
              <InputLabel id="grade-label">Select Grade</InputLabel>
              <Select
                labelId="grade-label"
                id="grade"
                name="grade"
                label="Select Grade"
                value={formik.values.grade}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <MenuItem sx={{ color: 'gray' }} value="">
                  Select Grade
                </MenuItem>
                {Array.from({ length: 10 }, (_, index) => {
                  const gradeValue = `grade${index + 3}`; // Grade values from 3 to 12
                  return (
                    <MenuItem key={gradeValue} sx={{ color: 'gray' }} value={gradeValue}>
                      Grade {index + 3}
                    </MenuItem>
                  );
                })}
              </Select>
              {formik.touched.grade && formik.errors.grade && <FormHelperText error>{formik.errors.grade}</FormHelperText>}
            </FormControl>
          </Grid>
        )}
      </Grid>

      <Box sx={{ mt: 2 }}>
        <AnimateButton>
          <Button
            disableElevation
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            sx={{
              background: 'linear-gradient(269.64deg, #7000FF 0%, #7000FF 0.01%, #A658F5 99.15%)',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              '&:hover': {
                background: 'linear-gradient(269.64deg, #7000FF 0%, #7000FF 0.01%, #A658F5 99.15%)'
              }
            }}
            color="secondary"
          >
            Sign up
          </Button>
        </AnimateButton>
      </Box>
    </form>
  );
};

export default AuthRegister1;
