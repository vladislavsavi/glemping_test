import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./page/Home"));

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Router;
