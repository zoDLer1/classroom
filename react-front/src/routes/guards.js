import { redirect } from './actions'
import { LOGIN_URL } from './RouterConfig'
import user from 'store/user'

export function IsUserAuth (onReject){

    const useUserAuth = () => {
        return user.isAuth

    }
    
    return [useUserAuth, onReject ? onReject: redirect(LOGIN_URL)]
}