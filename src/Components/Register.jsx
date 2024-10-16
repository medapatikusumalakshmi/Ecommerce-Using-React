import React from 'react'
import { Link } from 'react-router-dom'
export default function Register(){

  let Regvalidation=()=>{
    let ele=document.getElementById("uname")
    window.localStorage.setItem("name",ele.value)
    let ele1=document.getElementById("email")
    window.localStorage.setItem("email",ele1.value)
    let ele2=document.getElementById("passwrd")
    window.localStorage.setItem("password",ele2.value)
  }
  return(
    <>
    <div id='wholelog'>
        <img src="https://cdn.pixabay.com/photo/2023/11/16/15/49/ai-generated-8392596_640.png" alt="rose"  id='rose'/>
        <img src="https://cdn.pixabay.com/photo/2014/04/03/11/54/mannequin-312526_640.png" alt="shp"  id='girl'/>
        <img src="https://cdn.pixabay.com/photo/2014/04/03/11/54/mannequin-312526_640.png" alt="clo" id='clo'/> 
        <div className="mainlog">
      <h2>Register</h2>
      <form>
       <label htmlFor="" id='us'>User Name :</label>
       <input type="text"  id='uname'/> <br />
       <label htmlFor="" id='em'>Email :</label>
       <input type="email" id='email'/> <br />
       <label htmlFor="" id='pa'>Password :</label>
       <input type="password" id='passwrd'/> <br />
       <Link to="/login"><button onClick={Regvalidation}>Register</button></Link> <br />
       <Link to="/"><button id='bt'>Cancel</button></Link>
      </form>
    </div>
    </div>
    </>
  )
}