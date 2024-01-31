"use client"
import React, { useState } from "react";
import './Login-Signup.css';
import person_icon from '../Assets/person.png'
import mail_icon from '../Assets/mail.png'
import password_icon from '../Assets/password.png'
import Image from "next/image";

const Login_Signup = () => {

    const [action, setAction] = useState('Sign Up');
    return (
        <div class="outside-container">
            <div className='container'>
                <div className="heading-of-loginsignup">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Login" ? <div></div> : <div className="input">
                        <Image id="Image" src={person_icon} width="30" height="30" alt="" />
                        <input type="text" placeholder="Name" />
                    </div>}

                    <div className="input">
                        <Image id="Image" src={mail_icon} width="25" height="25" alt="" />
                        <input type="email" placeholder="Email-id" />
                    </div>
                    <div className="input">
                        <Image id="Image" src={password_icon} width="25" height="25" alt="" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
                </div>
            </div >
        </div>
    )
}

export default Login_Signup