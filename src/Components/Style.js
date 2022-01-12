import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";

export const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  margin: "auto",
  borderRadius: 10,
  height: "100vh",
  paddingTop: "10%",
});

export const Button = styled("button")({
  color: "#fff",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "bold",
  background: "transparent",
  border: "none",
});

export const LoginStyle = makeStyles({
  headmain_cont:{
    fontSize: "28px",
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "800",
    fontFamily: "'Ubuntu', sans-serif",
    
  },
  head_sub_cont:{
    mt: 1,
              mb: 1,
              fontSize: "14px",
              color: "#4648df",
              fontWeight: "600",
  },
  Main_container:{
    margin: "auto",
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "450px",
  },
  Google__btn:{
    marginTop:"-3px",
    
  },
  Login__Inputs: {
    padding: " 6px 10px",
    width: "100%",
    fontSize: "16px",
    lineHeight: "23px",
    border: "1px solid #c4c2c2",
    borderRadius: "5px",
    "&.Mui-focused": {
      border: "2px solid #4648df",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
  },
  form_control: {
    justifyContent: "space-between",
  },
  Main_Form_Box:{
    boxShadow: { xs: "none", sm: 3 },
    p: { xs: 3, sm: 6 },
    borderRadius: 2,
    mt: 4,
    backgroundColor: "#fff",
    mb: 4,
  },
})
