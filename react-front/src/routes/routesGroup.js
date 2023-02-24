export default class RoutesGroup {
    constructor (url, routes){
        this.routes = routes
        this.url = url
    }

    setUrl(url){
        this.url = url
        return this.url
    }


    render(key){
        return this.routes.map(
                (route, index) => {
                    route.setUrl(this.url+route.url)              
                    return route.render(key+"-"+index)
                })
            
        
    }  
} 