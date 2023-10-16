import React, { useState } from 'react';
import "./Logincss.css"
import { useNavigate } from 'react-router-dom';
function SignIn(props) {
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const userinp=(e)=>{
        setusername(e.target.value)


    }
    const userpass=(e)=>{
        setpassword(e.target.value)

        
    }
    const navigate=useNavigate()
    const handle=(e)=>{
        e.preventDefault()
        if(username=="abcd" && password=="abcd"){
            localStorage.setItem("logged",true)
            navigate("/home")
            console.log("passed")
            
        }

    }


    











    return (
        
             <div class="grid">

<form   class="form login">

  <div class="form__field">
    <label for="login__username"><span class="hidden">Username</span></label>
    <input onChange={userinp} id="login__username" type="text" name="username" class="form__input" placeholder="Username" on required=""></input>
  </div>

  <div class="form__field">
    <label for="login__password"><span class="hidden">Password</span></label>
    <input onChange={userpass} id="login__password" type="password" name="password" class="form__input" placeholder="Password" required=""></input>
  </div>

  <div class="form__field">
    <button style={{marginLeft:"150px",height:"40px"}} onClick={handle}>SignIn</button>
  </div>

</form>

<p class="text--center">Not a member? <a href="#">Sign up now</a> </p>

</div>

    
    );
}

export default SignIn;
