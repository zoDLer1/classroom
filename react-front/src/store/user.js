
import { makeAutoObservable } from "mobx"



class User{
    access = null || localStorage.getItem('access')
    refresh = null || localStorage.getItem('refresh')
    user = null || JSON.parse(localStorage.getItem('user'))
    isAuth = localStorage.getItem('isAuth') || false

    constructor(){
        makeAutoObservable(this)
    }

    login(access, refresh){
        this.access = access
        this.refresh = refresh
        this.isAuth = true
        localStorage.setItem('refresh', refresh)
        localStorage.setItem('access', access)
        localStorage.setItem('isAuth', true)
    }


}

export default new User()