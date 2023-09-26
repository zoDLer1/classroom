import { useContext, useState, createContext } from "react"



export const UserContext = createContext();

export const useUser = () => useContext(UserContext);


export const usePermissions = () => {
    const user = useUser()
    return {
        isTeacher: user.data.role === 2,
        isStudent: user.data.role === 1
    }
}


export const UserContextWrapper = ({ children }) => {
    const [data, setData] = useState({});
    const [isAuth, setAuth] = useState(false)
    const [accessToken, setAccessToken] = useState('')

    const setToken = (token) => {
        localStorage.setItem('access', token)
        setAccessToken(token)

    }

    const authenticate = (data, token) => {
        setAuth(true)
        setData(data)
        setToken(token)
    }

    return (
        <UserContext.Provider value={{ data, isAuth, accessToken, authenticate }}>{children}</UserContext.Provider>
    );
};