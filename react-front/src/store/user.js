
import { makeAutoObservable } from "mobx"



class User{
    access = null || localStorage.getItem('access')
    refresh = null || localStorage.getItem('refresh')

    constructor(){
        makeAutoObservable(this)
    }

    login(access, refresh){
        this.access = access
        this.refresh = refresh
        localStorage.setItem('refresh', refresh)
        localStorage.setItem('access', access)
        console.log(access, refresh)
    }


}

export default new User()