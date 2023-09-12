import axios from "axios";
import AuthService from "services/AuthService";

export const DOMAIN = 'http://localhost:8000/api/v1'
export const BAESDOMAIN = 'http://localhost:8000'
// axios.defaults.timeout = 1000 * 100;

export const Defaultconfig = {
    baseURL: DOMAIN,
    headers: {},

}





const DefaultApiInstanse = axios.create(Defaultconfig)

DefaultApiInstanse.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
    return config
})
DefaultApiInstanse.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        if (error.response.status === 401) {
            const response = await AuthService.refresh_token()
            if (response?.status === 401) {
                window.location = '/accounts/login'
            }
            else {
                localStorage.setItem('access', response.data.access)
                return DefaultApiInstanse.request(error.config)
            }
        }
        return Promise.reject(error)
    }
)






export const AuthApiInstanse = axios.create({
    baseURL: DOMAIN,
    withCredentials: true
})

export default DefaultApiInstanse