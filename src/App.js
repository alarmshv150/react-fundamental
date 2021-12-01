import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/index";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/App.css";

  /* root component */
export const App = () => {
  /* state hook */
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  /* side effect hook */
  useEffect(() => {
    if (localStorage.getItem("auth")) setIsAuth(true);
    setLoading(false);
  }, []);
  
  return (
    <Context.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </Context.Provider>
  );
};


