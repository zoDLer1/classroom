export default class BaseRoute {
    constructor (url, element, guards=[]){
        this.setUrl(url)
        this.setGuards(guards)
        this.element = element
        
    }

    setUrl(url){
        this.url = url
        return this.url
    }
    setGuards(guards){
        this.guards = guards
    }
}