import { redirect } from './actions'
import { LOGIN_URL } from './RouterConfig'
import user from 'store/user'

export const IsUserAuth = (onReject) => {
    const isAuth = Boolean(user.access)
    return [isAuth, onReject ? onReject: redirect(LOGIN_URL)]
}