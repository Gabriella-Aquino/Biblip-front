import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import React from "react";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRouter;
