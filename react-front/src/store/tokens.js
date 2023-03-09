import { makeAutoObservable } from "mobx"

class Tokens{
    access = null || localStorage.getItem('access')
    refresh = null || localStorage.getItem('refresh')

    constructor(){
        makeAutoObservable(this)
    }

    access_token(access){
        this.access = access
        localStorage.setItem('access', access)
    }

    refresh_token(refresh){
        this.refresh = refresh
        localStorage.setItem('refresh', refresh)
    }
}
export default new Tokens()