
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';

import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router';

const OTP = ({ ...others }) => {
    const theme = useTheme();
    const forget = localStorage.getItem('forget');
    const  navigate = useNavigate();
   
    const role = forget ? JSON.parse(forget).role : '';
    const email = forget ? JSON.parse(forget).email : '';
    return (
        <>
            <Formik
                initialValues={{

                    otp: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    otp: Yup.string().required('OTP is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
             
                        const formValues = {
                            emailaddress: email,
                            role: role,
                            otp: values.otp
                        }
                        console.log("🚀 ~ onSubmit={ ~ formValues:", formValues)
                        const response = await axios.post(`http://localhost:8080/api/v1/user/VerifyOtp`, formValues, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });

                        const data = response.data;
                        console.log(data, 'OTP');
                        // Save user data to local storage

                        // Redirect to login page
                        navigate('/auth/reset-password');

                        // Show success toast
                        toast.success(data.data || 'OTP verified successfully.', {
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
                        console.error('Error while verifying OTP:', error);

                        // Show error toast
                        toast.error(error.response?.data?.data || 'Error while Verifying OTP', {
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
                        <FormControl fullWidth error={Boolean(touched.otp && errors.otp)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-otp-login">Enter Your OTP</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-otp-login"
                                type="number"
                                value={values.otp}
                                name="otp"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="OTP"
                                inputProps={{}}
                            />
                            {touched.otp && errors.otp && (
                                <FormHelperText error id="standard-weight-helper-text-otp-login">
                                    {errors.otp}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                                    Verify OTP
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default OTP;
