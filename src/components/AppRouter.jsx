import { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router/routes";
import MyLoader from "./UI/MyLoader/MyLoader";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) return <MyLoader />;

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map((route) => (
                      <Route
                          key={route.path}
                          path={route.path}
                          element={route.element}
                      />
                  ))
                : publicRoutes.map((route) => (
                      <Route
                          key={route.path}
                          path={route.path}
                          element={route.element}
                      />
                  ))}
        </Routes>
    );
};

export default AppRouter;
