import {useState} from 'react'

export default function useToken(key) {
    const getToken = () => {
        return JSON.parse(sessionStorage.getItem(key))?.token
    }
    
    const [token, setToken] = useState(getToken())

    const saveToken = userToken => {
        sessionStorage.setItem(key, userToken.token)
        setToken(userToken.token)
    }
    return {setToken: saveToken, token}
}