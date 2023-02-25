import axios from "axios";
import user from "store/user";


const DOMAIN = 'http://localhost:8000/api/v1'
// axios.defaults.timeout = 1000 * 100;

export const Defaultconfig = {
    baseURL: DOMAIN,
    headers:{},
    
}




const DefaultApiInstanse = axios.create(Defaultconfig)

DefaultApiInstanse.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${user.access}`
    return config
})






export const AuthApiInstanse = axios.create({
    baseURL: DOMAIN,

})

export default DefaultApiInstanse