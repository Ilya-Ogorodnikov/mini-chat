import { FC } from 'react';
import { AppBar, Grid, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { CustomButton } from '..';

import { LOGIN_ROUTE } from '../../utils/constants';
import { auth, loginWithGoogle } from '../../utils/firebase';

const Navbar: FC = () => {
  const [user] = useAuthState(auth);

  return (
    <AppBar position="static" color="secondary">
      <Toolbar variant="dense">
        <Grid container justifyContent="flex-end">
          {user ? (
            <CustomButton onClick={() => auth.signOut()}>Выйти</CustomButton>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <CustomButton onClick={loginWithGoogle}>Логин</CustomButton>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
