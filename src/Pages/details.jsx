import React from "react";
import { useLocation } from "react-router-dom";

export default function Details(){
let location=useLocation()
console.log(location);
let item=location.state.x
    return(
        <>
       <div id="mainn">
       <div id="itminv">
            <img src={item.image} alt="img" />
            <h3>Category:{item.category}</h3>
            <p>Description:{item.description}</p>
            <h5>Rate:{item.rating.rate}</h5>
            <h5>Count:{item.rating.count}</h5>
        </div>
       </div>
        </>
    )
}