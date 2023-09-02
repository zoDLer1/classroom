
import { makeAutoObservable } from "mobx"
import AuthService from "services/AuthService";



export default class UserStore {
    user = {}
    isAuth = false
    token = null


    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }


    setUser(user) {
        this.user = user
    }

    setToken(token) {
        this.token = token
    }

    authenticate(userData, token) {
        this.setAuth(true)
        this.setUser(userData)
        this.setToken(token)
    }

    async refresh() {
        try {
            const response = await AuthService.refresh_token()
            const { user, access } = response.data
            this.authenticate(user, access)
            return response
        }
        catch (e) {
            return e
        }
        
    }

    async login(data) {
        try {
            const response = await AuthService.login(data)
            const { user, access } = response.data
            this.authenticate(user, access)
            return response
        }
        catch (e) {
            return e
        }
    }

}

