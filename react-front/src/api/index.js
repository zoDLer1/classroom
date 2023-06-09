import axios from "axios";
import tokens from "store/tokens";
import AuthService from "services/AuthService";

export const DOMAIN = 'http://26.238.98.162:8000/api/v1'
export const BAESDOMAIN = 'http://26.238.98.162:8000'
// axios.defaults.timeout = 1000 * 100;

export const Defaultconfig = {
    baseURL: DOMAIN,
    headers: {},

}





const DefaultApiInstanse = axios.create(Defaultconfig)

DefaultApiInstanse.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${tokens.access}`
    return config
})
DefaultApiInstanse.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        if (error?.response?.data?.code === "user_not_found"){
            window.location = '/accounts/login'
        }
        if (error.response.status === 401) {
            try{
                const response = await AuthService.refresh_token()
                console.log(response)
                return DefaultApiInstanse.request(error.config)
            }
            catch{
                window.location = '/accounts/login'
            }
            
        }


        return Promise.reject(error)




    }
)






export const AuthApiInstanse = axios.create({
    baseURL: DOMAIN,

})

export default DefaultApiInstanse