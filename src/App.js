import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AuthContextProvider from "./Context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
      </Router>
    </AuthContextProvider>
  );
};

export default App;
