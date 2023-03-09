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
}
export default TestsServise