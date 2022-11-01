import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/UI/AppRouter";
import { AuthContext } from "./context/Context";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoad, setIsLoad] = useState(true)
useEffect(() => {
 if(localStorage.getItem('auth')) {
  setIsAuth(true)
 }
 setIsLoad(false)
}, [])

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoad}}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
