import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { Route, Routes, Link } from "react-router-dom";
import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";
import HomePage from "../pages/Homepage";
import { makeStyles } from "@mui/styles";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  mainbt: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  singOut: {
    float: "Left",
  },
});

function Navbar() {
  const classes = useStyles();
  const Navigate = useNavigate();
  const { logOut, currentUser } = useAuth();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <nav>
              {currentUser && (
                <Button type="button"  sx={{ marginX:'20px'}}>
                  <Link to="/homepage" className={classes.mainbt}>
                    Home
                  </Link>
                </Button>
              )}
              {!currentUser && (
                <Button color="inherit"  sx={{ marginX:'20px' }}>
                  <Link to="/" className={classes.mainbt}>
                    Login
                  </Link>
                </Button>
              )}
              {/* {!currentUser && (
                <Button color="inherit" sx={{ marginX:'20px' }}>
                  <Link to="/SignUp " className={classes.mainbt}>
                    SignUp
                  </Link>
                </Button>
              )} */}
              {currentUser && (
                <Button color="inherit"  sx={{ marginX:'20px' }}>
                  <Link
                    to="/signIn"
                    onClick={async (e) => {
                      e.preventDefault();
                      logOut();
                      Navigate("/");
                    }}
                    className={classes.mainbt}
                  >
                    Sign Out
                  </Link>
                </Button>
              )}
            </nav>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/" element={<SignIn />} />
        {/* <Route exact path="/signUp" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
}

export default Navbar;
