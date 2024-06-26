import React, { useEffect, useState } from 'react';
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
  const [AllGrades, setAllGrades] = useState([]);

  const fetchAllGrades = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/grade/all-grades');
      const data = response.data;
      setAllGrades(data?.allgrades);
    } catch (error) {
      console.error('Error while retrieving user:', error);
    }
  };

  useEffect(() => {
    fetchAllGrades();
  }, []);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
        if (['student'].includes(role)) {
          return !!value; // Return true if grade is provided, false otherwise
        }
        return true; // Return true for other roles where grade is not required
      })
    }),
    onSubmit: async (values) => {
      console.log(values);

      const studentData = {
        fullname: values.fullname,
        emailaddress: values.emailaddress,
        username: values.username,
        password: values.password,
        fulladdress: values.fulladdress,
        confirmPassword: values.confirmPassword,
        role: values.role,
        grade: values.grade,
      }
      const teacherData = {
        fullname: values.fullname,
        emailaddress: values.emailaddress,
        username: values.username,
        password: values.password,
        fulladdress: values.fulladdress,
        confirmPassword: values.confirmPassword,
        role: values.role
      }
      const parentData = {
        fullname: values.fullname,
        emailaddress: values.emailaddress,
        username: values.username,
        password: values.password,
        fulladdress: values.fulladdress,
        confirmPassword: values.confirmPassword,
        role: values.role,
        childrollno: values.childrollno
      }
      try {
        let user;
        switch (values.role) {
          case 'student':
            user = await axios.post('http://localhost:8080/api/v1/student/registerStudent/${values.grade}', studentData, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            break;
          case 'teacher':
            user = await axios.post('http://localhost:8080/api/v1/teacher/register-teacher', teacherData, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            break;
          case 'parent':
            user = await axios.post('http://localhost:8080/api/v1/parent/registerParent', parentData, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            break;
          default:
            break;
        }
         console.log(user);
        const data = user.data;
        navigate('/auth/login');
         console.log(user);
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
      } catch (error) {
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
    }
  });

  
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
                {/* {Array.from({ length: 10 }, (_, index) => {
                  const gradeValue = `grade${index + 3}`; // Grade values from 3 to 12
                  return (
                    <MenuItem key={gradeValue} sx={{ color: 'gray' }} value={gradeValue}>
                      Grade {index + 3}
                    </MenuItem>
                  );
                })} */}
                {AllGrades?.map((grade) => (
                  <MenuItem key={grade} sx={{ color: 'gray' }} value={grade?._id}>
                    {grade?.gradeNumber}
                  </MenuItem>
                ))}
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
