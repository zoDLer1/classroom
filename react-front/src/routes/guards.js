import { useSelector } from 'react-redux'


export const IsUserAuth = (onReject) => {
    const useUserAuth = () =>{
        const access_token = useSelector(state => state.users.access)
        const access = Boolean(access_token)
        return access

    }
    return [useUserAuth, onReject]
}