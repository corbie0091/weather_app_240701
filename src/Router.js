import { HashRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/SignUp";
import { PageNotFound } from "./pages/PageNotFound";

export const Router = () => {
  return (
    <HashRouter>
      <Routes path="/" element={<Home />} />
      <Routes path="/login" element={<Login />} />
      <Routes path="/signup" element={<Signup />} />
      <Routes path="/*" element={<PageNotFound />} />
    </HashRouter>
  );
};
