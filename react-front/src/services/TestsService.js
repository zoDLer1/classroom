import DefaultApiInstanse from "api";



class TestsServise {

    static async templates() {
        return await DefaultApiInstanse.get('tests/templates')
    }

    static async createTemplate(data) {
        return await DefaultApiInstanse.post('tests/templates', data)
    }
    static async getTemplate(id) {
        return await DefaultApiInstanse.get(`tests/templates/${id}`)
    }
    static async updateTemplate(id, data) {
        return await DefaultApiInstanse.put(`tests/templates/${id}`, data)
    }

    static async deteleTemplate(id) {
        return await DefaultApiInstanse.delete(`tests/templates/${id}`)
    }

    static async get(id) {
        return await DefaultApiInstanse.get(`tests/${id}`)
    }
    static async create(data) {
        return await DefaultApiInstanse.post('tests/', data)
    }
    static async add_to_class(_class, template) {
        return await DefaultApiInstanse.post('tests/', { _class, template })
    }
    static async delete(id) {
        return await DefaultApiInstanse.delete(`tests/${id}`)
    }
    
    static async pass(id, data) {
        return await DefaultApiInstanse.post(`tests/pass/${id}`, data)
    }
    static async getPassedTest(id){
        return await DefaultApiInstanse.get(`tests/passed/${id}`)
    }
    static async getPassedTestsStatistics(id){
        return await DefaultApiInstanse.get(`tests/${id}/statistics`)
    }
}
export default TestsServise