import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import EndlessDisc_Banner from "../assets/EndlessDisc_Banner"
import "./Login.css"

async function attempt_login(credentials) {
    const response = await fetch(`http://localhost:5000/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    })
    if(!response.ok) {console.log("attempt_login() failed")}
    console.log(response)
    const result = await response.json()
    return result;
}
async function signup(credentials) {
    const response = await fetch(`http://localhost:5000/signup`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    })
    if(!response.ok) {console.log("signup() failed")}
    console.log(response)
    const result = await response.json()
    return result;
}



function Login(setToken) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = async e => {
        e.preventDefault()
        const token = await attempt_login({username, password})
        console.log(token)
        setToken.setToken(token)
    }

    return (
        <div className='background'>
            <div className="login-box">
                <form onSubmit={submit}>
                    <h1>Endless Disc</h1>
                    <input className="login-input" id="username" placeholder="Username" type="text" onChange={e => setUsername(e.target.value)} />
                    <br />
                    <input className="login-input" id="password" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
                    <br />
                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;