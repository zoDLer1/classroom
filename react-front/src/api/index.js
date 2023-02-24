import axios from "axios";

const DOMAIN = 'http://localhost:8000/api/v1'
// axios.defaults.timeout = 1000 * 100;

export const Defaultconfig = {
    baseURL: DOMAIN,
    headers:{},
    
}
const token = localStorage.getItem('access_token')
if (token) Defaultconfig.headers['authorization'] = `Bearer ${token}`


export const DefaultApiInstanse = axios.create(Defaultconfig)

export const AuthApiInstanse = axios.create({
    baseURL: DOMAIN,

})
