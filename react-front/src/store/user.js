
import { makeAutoObservable } from "mobx"



class User{
    data = null || JSON.parse(localStorage.getItem('user'))
    isAuth = localStorage.getItem('isAuth') || false
    member = Number(localStorage.getItem('member')) || null
    constructor(){
        makeAutoObservable(this)
    }

    login(user){
        this.data = user
        this.isAuth = true
        localStorage.setItem('isAuth', true)
        localStorage.setItem('user', JSON.stringify(user))
    }
    setMember (member){
        this.member = Number(member)
        member = localStorage.setItem('member', member)
    }
}

export default new User()