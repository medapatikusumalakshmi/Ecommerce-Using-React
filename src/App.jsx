import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Final from "./Components/Final";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Error from "./Pages/Error";
import './style.css'
import Details from "./Pages/details";
import CartPage from "./Pages/CartPage";
import Success from "./Pages/Success";

export default function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Final/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="*" element={<Error/>}></Route>
            <Route path="/detail" element={<Details/>}></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
            <Route path="/success" element={<Success/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}