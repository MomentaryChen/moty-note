import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import UserContext from "../contexts/UserContext";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from 'react-i18next';
import AppContext from "../contexts/AppContext";

function MenuAppBar(props) {
  const userContext = React.useContext(UserContext);
  const { t } = useTranslation();

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
          { t('noteApp.title')}
          </Typography>
          <I18NMenu></I18NMenu>
          {userContext.authStatus ? (
            <Button color="inherit" onClick={() => logout()}>
                { t('noteApp.menuAppBar.logout')}
            </Button>
          ) : (
            <Button color="inherit" onClick={() => login()}>
               { t('noteApp.menuAppBar.login')}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

function I18NMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const anchorElId = "i18n-popover";
  const { t } = useTranslation();

  // Context
  const appContext = React.useContext(AppContext);

  function openiI18nPopOver(event) {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleI18nChange(value){
    appContext.setLang(value);
    console.log('換語言');
  }

  return (
    <>
      <Button
        aria-describedby={anchorElId}
        color="inherit"
        onClick={openiI18nPopOver}
      >
        { t('noteApp.menuAppBar.lang')}
      </Button>
      <Popover
        id={anchorElId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List component="nav" aria-label="i18n">
          <ListItemButton onClick={() => handleI18nChange('en')}> <ListItemText primary={t('i18n.english')} /></ListItemButton>
          <ListItemButton onClick={() => handleI18nChange('zh-TW')}> <ListItemText primary={t('i18n.zh-TW')} /></ListItemButton>
        </List>
      </Popover>
    </>
  );
}

export default MenuAppBar;
