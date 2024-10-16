import React,{useState} from "react";

function Counter(){
    let[state,setState]=useState(0);
    let count=1
    function a(){
        
        setState(state+count++)
    }
    var b=()=>{
        setState(state-count--)
    }
    
    
    return(
        <>
        <p style={{color:"blue"}}>Add to cart:  <button onClick={a} style={{height:"25px",width:"25px",borderRadius:"50px",color:"white",backgroundColor:"#0d6efd"}}>+</button>                  {state}                <button onClick={b} style={{height:"25px",width:"25px",borderRadius:"50px",color:"white",backgroundColor:"#0d6efd"}}>-</button></p> <br />
        </>
    )
}
export default Counter