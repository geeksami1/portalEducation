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
import axios from 'axios';
import { toast } from 'react-toastify';

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
      emailaddress: '',
      username: '',
      password: '',
      fulladdress: '',
      confirmPassword: '',
      role: '',
      grade: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Full name is required'),
      emailaddress: Yup.string().email('Invalid email address').required('Email is required'),
      username: Yup.string().required('Username is required'),
      fulladdress: Yup.string().required(' Address is required'),
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
    onSubmit: async (values) => {
      console.log('Submitted values:', values);

      try {
        const response = await axios.post('http://localhost:8080/api/v1/student/registerStudent', values, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = response.data;
        console.log(data, 'USERSIGNUP');
        // Save user data to local storage
        // localStorage.setItem('user', JSON.stringify(values));

        // Redirect to login page
        navigate('/auth/login');

        // Show success toast
        toast.success(data.message || 'Successfully created account.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        });
        console.log(data, 'USERSIGNUP');
      } catch (error) {
        // Handle error
        console.error('Error while creating user:', error);

        // Show error toast
        toast.error(error.response.data.data, {
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
      // dispatch(setUser(values));
      //   // CONDITIONALLY DEAL WITH THE REDIRECT IF USER ROLE IS STUDENT THEN GO TO STUDENT DASHBOARD ELSE GO TO TEACHER DASHBOARD
      // if (values.role === 'student') {
      //   navigate('/');
      // } else {
      //   navigate('/dashboard/teacher');
      // }
      // switch (values.role) {
      //   case 'student':
      //     navigate('/');
      //     break;
      //   case 'parent':
      //     navigate('/dashboard/parent');
      //     break;
      //   default:
      //     navigate('/dashboard/teacher');
      //     break;
      // }
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
        {/*  USERNAME FIELD  */}
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth error={Boolean(formik.touched.username && formik.errors.username)}>
            <InputLabel htmlFor="outlined-adornment-username-register">Username</InputLabel>
            <OutlinedInput
              id="outlined-adornment-username-register"
              fullWidth
              label="Username"
              margin="dense"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <FormHelperText error id="standard-weight-helper-text--register">
                {formik.errors.username}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        {/* EMAIL FIELD  */}
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth error={Boolean(formik.touched.emailaddress && formik.errors.emailaddress)}>
            <InputLabel htmlFor="outlined-adornment-emailaddress-register">Email Address</InputLabel>
            <OutlinedInput
              id="outlined-adornment-emailaddress-register"
              fullWidth
              label="Email Address"
              margin="dense"
              name="emailaddress"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailaddress}
            />
            {formik.touched.emailaddress && formik.errors.emailaddress && (
              <FormHelperText error id="standard-weight-helper-text--register">
                {formik.errors.emailaddress}
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
        {/*  ADDRESS FIELD  */}
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth error={Boolean(formik.touched.fulladdress && formik.errors.fulladdress)}>
            <InputLabel htmlFor="outlined-adornment-fulladdress-register">Address</InputLabel>
            <OutlinedInput
              id="outlined-adornment-fulladdress-register"
              fullWidth
              label="Address"
              margin="dense"
              name="fulladdress"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fulladdress}
            />
            {formik.touched.fulladdress && formik.errors.fulladdress && (
              <FormHelperText error id="standard-weight-helper-text--register">
                {formik.errors.fulladdress}
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
