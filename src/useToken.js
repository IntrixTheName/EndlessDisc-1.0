import {useState} from 'react'

export default function useToken() {
    const getToken = () => {
        return JSON.parse(sessionStorage.getItem("user-auth"))?.token
    }
    
    const [token, setToken] = useState(getToken())

    const saveToken = userToken => {
        sessionStorage.setItem("user-auth", JSON.stringify(userToken))
        setToken(userToken.token)
    }
    return {setToken: saveToken, token}
}