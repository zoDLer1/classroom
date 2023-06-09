import DefaultApiInstanse, { AuthApiInstanse, BAESDOMAIN } from "api";
import user from "store/user";
import tokens from "store/tokens";

class AuthService {



    static async auth({ refresh, access }, userData) {
        tokens.access_token(access)
        tokens.refresh_token(refresh)
        user.login(userData)
    }
    static async login({ email, password }) {
        const response = await AuthApiInstanse.post('/users/login/', { email, password }).then(
            (response) => {
                this.auth(response.data.tokens, response.data.user)
                return response
            },
        )
        return response
    }
    static async refresh_token() {
        const response = await DefaultApiInstanse.post('users/refresh/', { refresh: tokens.refresh }).then(
            (s) => tokens.access_token(s.data.access)
        )
        return response
    }

    static async register(data) {
        const response = await AuthApiInstanse.post('/users/register/', data).then(
            (response) => {
                this.auth(response.data.tokens, response.data.user)
                return response
            })
        return response
    }
    static async logout() {
        return AuthApiInstanse.post('/users/logout')
    }

}
export default AuthService