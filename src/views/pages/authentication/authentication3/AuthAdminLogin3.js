import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthAdminLogin from '../auth-forms/AuthAdminLogin';
import AuthFooter from 'ui-component/cards/AuthFooter';
import { Box } from '@mui/system';


const AdminLogin = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthWrapper1>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item xs={12}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item xs={12}>
                    <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item xs={12}>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography
                            color={theme.palette.secondary.main}
                            gutterBottom
                            variant={matchDownSM ? 'h3' : 'h2'}
                            sx={{
                              background: 'linear-gradient(269.64deg, #7000FF 0%, #7000FF 0.01%, #A658F5 99.15%)',
                              color: '#fff', 
                              padding: '10px 20px', 
                              borderRadius: '5px', 
                              display: 'inline-block' 
                            }}
                          >
                            Classerly
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} container alignItems="center" justifyContent="center">
                        <Box sx={{ mb: 2, mt: 2 }}>
                          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                            AdminLogin with your credentials
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthAdminLogin />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container direction="column" alignItems="center" xs={12}>
                      <Typography component={Link} to="/auth/register" variant="subtitle1" sx={{ textDecoration: 'none', color: 'black' }}>
                        Don&apos;t have an account?
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default AdminLogin;
