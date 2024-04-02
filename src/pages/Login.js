import { useState } from "react"
import EndlessDisc_NoText from "../assets/EndlessDisc_NoText"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, toggleLoggedIn] = useState(false)

    return (
        <div className="login_box">
            <EndlessDisc_NoText />
            <br />
            {isLoggedIn ? (
                <h2>Welcome {username}!</h2>
            ) : (
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </form>
            )}
        </div>
    )
}

export default Login;