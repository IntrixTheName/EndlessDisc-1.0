import { useState } from "react";

export default function useToken(key) {
  const getToken = () => {
    console.log(sessionStorage.getItem(key));
    return sessionStorage.getItem(key);
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem(key, userToken);
    setToken(userToken);
  };
  return { setToken: saveToken, token };
}
