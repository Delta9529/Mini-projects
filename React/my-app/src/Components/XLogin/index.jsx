import React, { useState } from 'react';
import './login.css'

export default function XLogin(){
const [username,setUsername] = useState('');
const [pass, setPass] = useState('');
const [WelcomeMsg, setWelcomeMsg] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePassChange = (e) => {
        setPass(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'user' && pass === 'password') {
            setWelcomeMsg('Welcome, User!');
        } else {
            setWelcomeMsg('');
        }
    }
    return(
        <>
            <div className="container">
                <h1>XLogin</h1>
                <div className="form">
                    <form  onClick={handleSubmit}>
                        <label for='username'>Username : </label>
                        <input type='text' id='username' name='username' onChange={handleUsernameChange}/><br></br>
                        <label for='password'>Password : </label>
                        <input type='password' id='password' name='password' onChange={handlePassChange}/><br></br>
                        <button type= 'submit'>Submit</button>
                    </form>
                    {WelcomeMsg && <p>{WelcomeMsg}</p>}
                </div>
            </div>
        </>
    )
}