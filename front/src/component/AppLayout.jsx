import UserContext from "../contexts/UserContext";
import AppContext from "../contexts/AppContext";
import React from "react";
import Login from "./login/Login";
import Grid from "@mui/material/Grid";
import MenuAppBar from './MenuAppBar';
import NavMenu from './NavMenu';

function AppLayout(props) {
  const userContext = React.useContext(UserContext);
  const appContext = React.useContext(AppContext);

  return (
    <>
      <React.Fragment>
        {userContext.authStatus ? (
          <Grid container>
            <Grid item xs={12}>
                <MenuAppBar />
            </Grid>
            <Grid item xs={2}>
                <NavMenu />
            </Grid>
            <Grid item xs={10}>
                {props.children}
            </Grid>
          </Grid>
        ) : (
          <Login></Login>
        )}
      </React.Fragment>
    </>
  );
}

export default AppLayout;
