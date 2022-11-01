import { Route, Routes } from "react-router-dom";
import { privatRoutes, publicRoutes } from "../../router/routes";
import React, { useContext } from "react";
import { AuthContext } from "../../context/Context";
import Loader from "./Loader/Loader";

const AppRouter = () => {
const {isAuth, isLoad} = useContext(AuthContext)
if(isLoad) {
  return <Loader />
}
  return isAuth ? (
    <Routes>
      {privatRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.element}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.element}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
