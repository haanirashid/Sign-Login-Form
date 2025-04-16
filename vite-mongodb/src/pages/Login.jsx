import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
function Login() {

  const mailRef = useRef();
  const passRef = useRef();

  async function handleSubmit() {

    const email = mailRef.current.value;
    const password = passRef.current.value;

    if(!email || !password){
      return console.log("Enter both Values");
    }

    try {
      var fetchLog = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({email,password})
      })
      const data = await fetchLog.json();
      const token = data.data.token;
      localStorage.setItem("User-token", token);
      console.log(`toekn=> ${token}`);  
      console.log(`Login Post Request Data => ${JSON.stringify(data)}`);
      Swal.fire({
        title: 'Success!',
        text: `Successfully Logged in! ${JSON.stringify(data)}`,
        icon: 'success',
        confirmButtonText: 'OK'
      })
      
    }
    catch(err){
      console.log(`Login Post Request Error => ${err}`);
      Swal.fire({
        title: 'Error!',
        text: `Login Post Request Error => ${err}`,
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }

  return (
    <>
      <div className="main_log">
        <div className="log">
          <h1>Login</h1>
          <input type="email" placeholder='Email' ref={mailRef} name="mail" />
          <input type="password" placeholder='password' ref={passRef} name="pass" />
          <p>Don't have an account? <Link to="/signin">Signin First</Link></p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Login