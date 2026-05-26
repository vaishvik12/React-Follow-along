import { useState } from 'react'

function LoginForm(){
      const [showPassword, setShowPassword] = useState(false);

      function handlePassword(){
        setShowPassword(!showPassword);
      }

     return (
      <>
        <h1>Hello, welcome to my website</h1>
        <div>
        <input 
        className = "user-input"
        type="email" placeholder = "Email" />
        </div>
        
        <input 
        className = "user-input"
        type={showPassword ? "text" : "password"}
        placeholder = "Password"/>
        <button
        className = "show-bttn"
        onClick = {handlePassword}
        >{showPassword ? "Hide" : "Show"}</button>
        
        <div>
        <button className = "user-bttn">Login</button>
        <button className = "user-bttn">Sign Up</button>
        </div>
      </>
     )
}

export default LoginForm;