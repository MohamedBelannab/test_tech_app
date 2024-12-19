import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AlertDefault } from "./layouts/Alert";
const Home = lazy(() => import("./pages/Home"));

const Routers = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <AlertDefault/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
