import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider, IconButton } from "@mui/material";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import { LoginStyle } from "./Style";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Or continue with
    </Typography>
  );
}

const theme = createTheme();


export default function LoginForm() {
  const classes = LoginStyle();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const { login, signInWithFacebook, signInWithGoogle } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      return alert("Please fill the requirements");
    }
    login(email, password)
      .then((response) => {
        Navigate("/homepage");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Box
          sx={{
            margin: "auto",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "450px",
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <img src="./assets/loginLogo.png" alt="main" />
          </Avatar>
          <Typography
            sx={{
              fontSize: "28px",
              letterSpacing: 0,
              textAlign: "center",
              fontWeight: "800",
              fontFamily: "'Ubuntu', sans-serif",
              p: { xs: 2, sm: 0 },
            }}
          >
            Login to your account
          </Typography>
          <Typography
            sx={{
              mt: 1,
              mb: 1,
              fontSize: "14px",
              color: "#4648df",
              fontWeight: "600",
            }}
          >
            <span style={{ color: "gray" }}>Or</span> start your 14-day for free
            trial
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              boxShadow: { xs: "none", sm: 3 },
              p: { xs: 2.5, sm: 5 },
              borderRadius: 2,
              mt: 4,
              backgroundColor: "#fff",
              mb: 4,
              margin: { xs: "25px 10px", sm: "25px 0" },
            }}
          >
            <Typography
              sx={{
                mb: 0.3,
                color: "#403c3c",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Email address
            </Typography>
            <input
              type="Email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              id="email"
              className={classes.Login__Inputs}
              variant="outlined"
            />
            <Typography
              sx={{
                mb: 0.3,
                color: "#403c3c",
                mt: 3,
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Password
            </Typography>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              autoComplete="current-password"
              className={classes.Login__Inputs}
            />

            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  sx={{ color: "#c4c2c2" }}
                />
              }
              label="Remember me"
              sx={{
                float: "left",
                mt: { xs: 1, sm: 3, md: 3 },
                pr: 0,
                mr: 1,
              }}
            />

            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mt: 3, mb: 2, background: "#4648df", fontWeight: 600 }}
            >
              Sign In
            </Button>
            <Divider sx={{ height: "1px", mt: 2 }} />
            <Copyright
              sx={{ m: "auto", mt: -1.4, background: "#fff", width: "115px" }}
            />
            <Grid
              item
              xs={12}
              container
              sx={{ justifyContent: "space-between", mt: 3 }}
            >
              <Grid
                item
                xs={5.5}
                sx={{
                  border: "1px solid #d1cfcf",
                  pb: "5px",
                  height: "37px",
                  textAlign: "center",
                }}
              >
                <IconButton
                  type="button"
                  onClick={() =>
                    signInWithGoogle()
                      .then((user) => {
                        Navigate('/homepage')
                      },
                      )
                      .catch((error) => console.log(error.message))
                  }
                >
                  <img src='./assets/googleimg.png' alt="google" height='25px' width='25px' className={classes.Google__btn} />
                </IconButton>
              </Grid>
              <Grid
                xs={5.5}
                item
                sx={{
                  border: "1px solid #d1cfcf",
                  textAlign: "center",
                  height: "37px",
                }}
              >
                <IconButton
                  type="button"
                  onClick={() =>
                    signInWithFacebook()
                      .then((user) => { 
                    Navigate('/homepage')
                    })
                      .catch((error) => console.log(error.message))
                  }
                >
                  <FacebookIcon
                    sx={{
                      fontSize: "30px",
                      color: "#4648df",
                      marginTop: "-5px",
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
