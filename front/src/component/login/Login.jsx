import React, { useState } from "react";
import UserContext from "../../contexts/UserContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';

export default function Login() {
  const context = React.useContext(UserContext);
  const [message, setMessage] = useState("請輸入帳密");

  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid item xs={6}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 5, width: "50ch" },
              border: '1px solid grey'
            }}
            
            autoComplete="off"
          >
            <h3>{message}</h3>

            <Stack spacing={2}>
                <TextField id="outlined-required" label="帳號" />
              <TextField id="outlined-required" label="密碼" />
              <Typography variant="h6" gutterBottom>
                <Link to="/ForgetSecret">忘記密碼</Link>
              </Typography>
              <Button
              variant="contained"
                onClick={() => context.setAuthStatus(true)}
              >
                Login
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
