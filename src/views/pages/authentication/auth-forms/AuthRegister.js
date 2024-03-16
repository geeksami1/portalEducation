import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// material-ui
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
  OutlinedInput,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Select, MenuItem } from '@mui/material';
// project imports
import useScriptRef from 'hooks/useScriptRef';
// import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
// import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'store/actions';

// ===========================||  REGISTER ||=========================== //

const Register = ({ ...others }) => {
  const dispatch = useDispatch(); // const { register } = useDispatch();
  const user = useSelector((state) => state?.user.user);
  // console.log(user, 'user');
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState('');
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleUserRoleChange = (event) => {
    console.log(event.target.value, 'event.target.value');
    setUserRole(event.target.value);
  };



  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2, mt: 1 }}>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              Sign up with your credentials
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          fname: '',
          lname: '',
          email: '',
          password: '',
          userRole: '',
          grade: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          fname: Yup.string().max(255).required('First Name is required'),
          lname: Yup.string().max(255).required('Last Name is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
          userRole: Yup.string().required('User Role is required'),
          // grade: Yup.string().when('userRole', {
          //   is: 'parent',
          //   then: Yup.string().required('Grade is required'),
          //   otherwise: Yup.string().notRequired()
          // })
          // userRole: Yup.string().optional()  
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            values.userRole = userRole;
            localStorage.setItem('user', JSON.stringify(values));
            dispatch(setUser(values));
            if (user?.userRole === 'teacher') {
              navigate('/dashboard/teacher');
            } else if (user?.userRole === 'student') {
              navigate('/dashboard/default');
            }
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
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              {/* FIRST NAME  */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={Boolean(touched.fname && errors.fname)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-firstName-register">First Name</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-firstName-register"
                    fullWidth
                    label="First Name"
                    margin="normal"
                    name="fname"
                    type="text"
                    value={values.fname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{ ...theme.typography.customInput }}
                  />
                  {touched.fname && errors.fname && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.fname}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              {/* LAST NAME  */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={Boolean(touched.lname && errors.lname)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-lastName-register">Last Name</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-lastName-register"
                    fullWidth
                    label="Last Name"
                    margin="normal"
                    name="lname"
                    type="text"
                    value={values.lname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{ ...theme.typography.customInput }}
                  />
                  {touched.lname && errors.lname && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.lname}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            {/* EMAIL ADDRESS */}
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            {/* Password */}
            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                label="Password"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                }}
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
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            {/* Radio Group */}
            <RadioGroup
              aria-label="user-role"
              name="userRole"
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mb: 2, mt: 2 }}
              value={userRole}
              onChange={handleUserRoleChange}
              onBlur={() => setFieldValue('userRole', userRole)}
              row
            >
              <FormControlLabel
                value="student"
                control={<Radio sx={{ '&.Mui-checked': { color: '#7b12fd' } }} />}
                label={<Typography sx={{ color: 'black' }}>Student</Typography>}
              />
              <FormControlLabel
                value="teacher"
                control={<Radio sx={{ '&.Mui-checked': { color: '#7b12fd' } }} />}
                label={<Typography sx={{ color: 'black' }}>Teacher</Typography>}
              />
              <FormControlLabel
                value="parent"
                control={<Radio sx={{ '&.Mui-checked': { color: '#7b12fd' } }} />}
                label={<Typography sx={{ color: 'black' }}>Parent</Typography>}
              />
            </RadioGroup>

            {userRole === 'parent' && (
              <FormControl fullWidth error={Boolean(touched.grade && errors.grade)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-grade">Grade</InputLabel>
                <Select id="outlined-adornment-grade" 
                value={values.grade} 
                MenuProps={{
                  PaperProps: {
                    style: {
                      background: 'linear-gradient(269.64deg, #7000FF 0%, #7000FF 0.01%, #A658F5 99.15%)',
                    
                    }
                  }
                }}
                sx={{ ...theme.typography.customInput }}
                onChange={handleChange} 
                onBlur={handleBlur} label="Grade">
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
            )}

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
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
                  label={
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                      Agree with &nbsp;
                      <Typography variant="subtitle1" component={Link} to="#" color="#7b12fd">
                        Terms & Condition.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            {/* Sign up Button  */}
            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(269.64deg, #7000FF 0%, #7000FF 0.01%, #A658F5 99.15%)',
                    color: '#fff', // Text color
                    padding: '10px 20px', // Padding
                    borderRadius: '5px', // Border radius
                    '&:hover': {
                      background: 'linear-gradient(269.64deg, #7000FF 0%, #7000FF 0.01%, #A658F5 99.15%)' // Gradient on hover
                    }
                  }}
                  color="secondary"
                >
                  Sign up
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Register;
