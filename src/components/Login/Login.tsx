import { FC } from 'react';
import { Box, Grid, Container } from '@mui/material';

import { CustomButton } from '..';

import { loginWithGoogle } from '../../utils/firebase';

const Login: FC = () => (
  <Container>
    <Grid
      container
      sx={{ height: window.innerHeight - 50 }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        sx={{ width: 400, background: '#9c27b0' }}
        container
        alignItems="center"
        direction="column"
      >
        <Box p={5}>
          <CustomButton onClick={loginWithGoogle}>
            Войти с помощью Google
          </CustomButton>
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default Login;
