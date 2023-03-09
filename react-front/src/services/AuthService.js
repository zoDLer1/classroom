import DefaultApiInstanse, { AuthApiInstanse, BAESDOMAIN } from "api";
import user from "store/user";
import tokens from "store/tokens";


 class AuthService {

    static async auth(email, password){
        try{
            await AuthApiInstanse.post('/users/login/', {email, password}).then(
                (response) => {
                    tokens.access_token(response.data.access)
                    tokens.refresh_token(response.data.refresh)
                },
                (error) => console.log(error)
            )
            await this.login()

        }
        catch (e){
         
        }
    }
    static async login(){
        await DefaultApiInstanse.get('/users/account/').then(
            (response) => {
                user.login({...response.data, avatar: BAESDOMAIN + response.data.avatar})
            }

        )
    }
    static async refresh_token(){
        return DefaultApiInstanse.post('users/refresh/', {refresh:tokens.refresh}).then(
            (s) => tokens.access_token(s.data.access),
            (e) => console.log(e)
        )
    }

    static async register(email, password){
        return AuthApiInstanse.post('/users/register/', {email, password})
    }
    static async logout(){
        return AuthApiInstanse.post('/users/logout')
    }
    
}
export default AuthService