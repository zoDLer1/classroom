import DefaultApiInstanse, { AuthApiInstanse } from "api";
import user from "store/user";



 class AuthService {

    static async login(email, password){
        try{
            await AuthApiInstanse.post('/users/login/', {email, password}).then(
                (response) => user.login(response.data.access, response.data.refresh),
                (error) => console.log(error)
            )
            await this.get_user()
        }
        catch (e){
         
        }
    }
    static async get_user(){
        await DefaultApiInstanse.get('/users/account/').then(
            (response) => console.log(response)
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