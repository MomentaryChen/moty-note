import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import UserContext from '../contexts/UserContext';

function MenuAppBar(props) {
    const userContext = React.useContext(UserContext);

    function logout() {
        userContext.setAuthStatus(false);
    }

    function login() {
        userContext.setAuthStatus(true);
    }
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Moty Note
          </Typography>
          {userContext.authStatus ?
            <Button color="inherit" onClick={() => logout()}>Logout</Button>
            :
            <Button color="inherit" onClick={() => login()}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MenuAppBar;
