import DefaultApiInstanse from "api";



class ClassServise {

    static async get(id){
        return await DefaultApiInstanse.get(`classes/${id}`)
    }

    static async all(){
        return await DefaultApiInstanse.get('classes/')
    }
    static async create(data){
        return await DefaultApiInstanse.post('classes/', data)
    }
    static async delete(id){
        return await DefaultApiInstanse.delete(`classes/${id}`)
    }
    static async patch(id, data){
        return await DefaultApiInstanse.patch(`classes/${id}`, data)
    }
    static async tasks(id){
        return await DefaultApiInstanse.get(`classes/${id}/tasks`)
    }

}
export default ClassServise