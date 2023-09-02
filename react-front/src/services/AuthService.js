import { AuthApiInstanse } from "api";
import user from "store/user";
import tokens from "store/tokens";

class AuthService {



    static async auth({ refresh, access }, userData) {
        tokens.access_token(access)
        tokens.refresh_token(refresh)
        user.login(userData)
    }
    static async login({ email, password }) {
        return await AuthApiInstanse.post('/users/login/', { email, password })
         
    }
    static async refresh_token() {
        return await AuthApiInstanse.post('users/refresh/')
    }

    static async register(data) {
        return await AuthApiInstanse.post('/users/register/', data)
    }
    static async logout() {
        return AuthApiInstanse.post('/users/logout')
    }

}
export default AuthService