import user from "store/user";

export const IsUserAuth = () =>{
    return user.isAuth
}
export const IsTeacher = () =>{
    return user.data.role === 2
}
export const IsStudent = () =>{
    return user.data.role === 1
}