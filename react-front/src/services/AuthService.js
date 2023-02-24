import { AuthApiInstanse } from "api";
import { useDispatch } from "react-redux";

import { UserLogin, UserRegister, UserLogout } from 'store/reducers/userReducer'




 class AuthService {

    constructor (dispatch){
        this.dispatch = dispatch
    }

    async login(email, password){
        await AuthApiInstanse.post('/token/', {email, password}).then(
            (response) => this.dispatch(UserLogin(response.data))
        )
    }

    async register(email, password){
        return AuthApiInstanse.post('/register', {email, password})
    }
    async logout(){
        return AuthApiInstanse.post('/logout')
    }
    
}
export default AuthService