import { AuthApiInstanse } from "api";
import user from "store/user";



 class AuthService {

    async login(email, password){
        await AuthApiInstanse.post('/users/login/', {email, password}).then(
            (response) => user.login(response.data.access, response.data.refresh)
        )
    }
    async get_user(){
        await AuthApiInstanse.post('/users/account/').then(
            (response) => console.log(response)
        )
    }
    async register(email, password){
        return AuthApiInstanse.post('/users/register/', {email, password})
    }
    async logout(){
        return AuthApiInstanse.post('/users/logout')
    }
    
}
export default AuthService