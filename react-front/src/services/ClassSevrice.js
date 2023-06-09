import DefaultApiInstanse, { AuthApiInstanse } from "api";



class ClassServise {

    static async getSubjects(){
        return await AuthApiInstanse.get('classes/subjects')
    }
    static async getColors(){
        return await AuthApiInstanse.get('classes/colors')
    }
    static async getClassTypes(){
        return await AuthApiInstanse.get('classes/types')
    }

    static async get(id){
        return await DefaultApiInstanse.get(`classes/${id}`)
    }
    static async join(uuid){
        return await DefaultApiInstanse.post(`classes/join/${uuid}`)
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
    static async put(id, data){
        return await DefaultApiInstanse.put(`classes/${id}`, data)
    }
    static async deleteMember(id){
        return await DefaultApiInstanse.delete(`classes/member/${id}`)
    }
    static async acceptWaiter(id){
        return await DefaultApiInstanse.post(`classes/waiter/${id}`)
    }
    static async rejectWaiter(id){
        return await DefaultApiInstanse.delete(`classes/waiter/${id}`)
    }


}
export default ClassServise