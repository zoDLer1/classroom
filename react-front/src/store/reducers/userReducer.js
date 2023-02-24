




const defaultState = {
    access: null || localStorage.getItem('access'), 
    refresh: null || localStorage.getItem('refresh'), 
}



const LOGIN = "LOGIN"
const REGISTER = "REGISTER"
const LOGOUT = "LOGOUT"

export default (state=defaultState, action) => {

    switch (action.type){
        case LOGIN:
            localStorage.setItem('access', action.payload.access)
            localStorage.setItem('refresh', action.payload.refresh)
            return {...action.payload}

        case REGISTER:
            console.log('user registering...')
            return state
        case LOGOUT:
            console.log('user logouting...')
            return state
        default:
            return state
    }   
}

export const UserLogin = (payload) => ({type: LOGIN, payload})
export const UserRegister = (payload) => ({type: REGISTER, payload})
export const UserLogout = (payload) => ({type: LOGOUT, payload})

 