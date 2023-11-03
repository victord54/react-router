import React from "react";
import { Route } from "react-router-dom";
import Layout from "../pages/public/Layout";
import ErrorPage from "../pages/public/error-page/ErrorPage";
import Home from "../pages/public/home/Home";
import Contact from "../pages/public/article/Article";
import Auth from "../pages/public/auth/Auth";

const router = (
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/article" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
    </Route>
);

export default router;
