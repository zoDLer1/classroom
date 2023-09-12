import { AuthApiInstanse } from "api";



class AuthService {

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