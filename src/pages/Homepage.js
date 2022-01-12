import { Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../Context/AuthContext";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { MyComponent } from "../Components/Style";

const useStyles = makeStyles({
  weltext: {},
  Welcomtext: {
    fontSize: "64px",
    width: "100vw",
    heigh: "100vh",
    fontWeigth: 700,
    fontFamily: "Lora",
    textAlign: "center",
  },
  email_text: {
    fontSize: "2.0em",
    width: "100%",
    heigh: "100vh",
    fontWeigth: 700,
    fontFamily: "Lora",
    textAlign: "center",
    display: "flexbox",
  },
});

function Homepage() {
  const classes = useStyles();
  const { currentUser } = useAuth();
  function Home(e) {
    // e.preventDefault();
    if (currentUser) {
      return (
        <>
          <MyComponent>
            <Typography className={classes.Welcomtext}>
              Welcom To dashboard page
            </Typography>
            <Typography
              className={classes.email_text}
              sx={{}}
            >{`Your Email: ${currentUser.email}`}</Typography>
          </MyComponent>
        </>
      );
    } else {
      <Typography className={classes.welText}>
        <nav>
          <Link to="/"> Please Login</Link>
        </nav>
      </Typography>;
    }
  }
  return <>{Home()}</>;
}

export default Homepage;
