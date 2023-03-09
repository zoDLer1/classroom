
import { makeAutoObservable } from "mobx"



class User{
    data = null || JSON.parse(localStorage.getItem('user'))
    isAuth = localStorage.getItem('isAuth') || false
    
    constructor(){
        makeAutoObservable(this)
    }

    login(user){
        this.data = user
        this.isAuth = true
        localStorage.setItem('isAuth', true)
        localStorage.setItem('user', JSON.stringify(user))
    }
}

export default new User()