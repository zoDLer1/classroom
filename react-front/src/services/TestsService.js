import DefaultApiInstanse from "api";



class TestsServise {
    static async get(id){
        return await DefaultApiInstanse.get(`tests/${id}`)
    }
    static async all(){
        return await DefaultApiInstanse.get('tests/')
    }
    static async create(data){
        return await DefaultApiInstanse.post('tests/', data)
    }
    static async add_to_class(_class, template){
        return await DefaultApiInstanse.post('tests/tasks', {_class, template})
    }
    static async get_task(id){
        return await DefaultApiInstanse.get(`tests/tasks/${id}`)
    }
    static async delete(id){
        return await DefaultApiInstanse.delete(`tests/${id}`)
    }
}
export default TestsServise