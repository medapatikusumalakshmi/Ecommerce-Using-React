import React,{Component} from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
return(
    <>
    <nav>
     <span>Cloths Zone</span>
     <ul>
        <Link to="/"><li style={{color:"white"}}>Home</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/login"><li style={{color:"white"}}>Login</li></Link>
     </ul>
    </nav>
    </>
)
}
