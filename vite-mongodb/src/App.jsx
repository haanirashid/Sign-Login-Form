// import { useState, useEffect } from 'react'
import './App.css'
import Router from './Routing/Router';

function App() {

  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5000/")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <>
    {/* <div className="app">
      <h1>Vite Project</h1>
    <h1>{message}</h1>
    </div> */}
    <Router/>
    </>
  )
}

export default App
