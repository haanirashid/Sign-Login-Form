import React, { useState, useRef } from 'react'

function Signin() {
    const [formData, setFormData] = useState({
        Uname: "",
        Fname: "",
        mail: "",
        pass: "",
        gen: "",
        agee: "",
        Phnumber: ""
    });

    const unameRef = useRef();
    const fnameRef = useRef();
    const mailRef = useRef();
    const passRef = useRef();
    const genRef = useRef();
    const ageRef = useRef();
    const phoneRef = useRef();


    // function handleChange(e) {
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    // }


    async function handleSubmit() {

        setFormData({
            Uname: unameRef.current.value,
            Fname: fnameRef.current.value,
            mail: mailRef.current.value,
            pass: passRef.current.value,
            gen: genRef.current.value,
            agee: ageRef.current.value,
            Phnumber: phoneRef.current.value
        });

        try {
            var fectchData = await fetch("http://localhost:5000/signin", {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(formData)
            })
            var res = await fectchData.json();
            console.log(`Data=>${JSON.stringify(res)}`);

        }
        catch (err) {
            console.log(`Error=>${err}`);
        }
    }

    return (
        <>
            <div className="main_sign">
                <div className="sign">
                    <h1>Sign in</h1>
                    <input type="text" placeholder='UserName' ref={unameRef} name="Uname" />
                    <input type="text" placeholder='FatherName' ref={fnameRef} name="Fname" />
                    <input type="email" placeholder='Email' ref={mailRef} name="mail" />
                    <input type="password" placeholder='password' ref={passRef} name="pass" />
                    <input type="text" placeholder='Gender' ref={genRef} name="gen" />
                    <input type="text" placeholder='age' ref={ageRef} name="agee" />
                    <input type="text" placeholder='phone Number' ref={phoneRef} name="Phnumber" />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Signin