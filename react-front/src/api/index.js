import axios from "axios";
import tokens from "store/tokens";
import AuthService from "services/AuthService";

export const DOMAIN = 'http://localhost:8000/api/v1'
export const BAESDOMAIN = 'http://localhost:8000'
// axios.defaults.timeout = 1000 * 100;

export const Defaultconfig = {
    baseURL: DOMAIN ,
    headers:{},
    
}





const DefaultApiInstanse = axios.create(Defaultconfig)

DefaultApiInstanse.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${tokens.access}`
    return config
})
DefaultApiInstanse.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        try{
            // if(error.response.status === 401){
            
            //     await AuthService.refresh_token()
            //     return DefaultApiInstanse.request(error.config)
            // }
            
        }
        catch{
            // console.log(error)
        }
        
        return Promise.reject(error)
        
    
        
        
    }
)






export const AuthApiInstanse = axios.create({
    baseURL: DOMAIN,

})

export default DefaultApiInstanse