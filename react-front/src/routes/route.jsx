import { Route } from "react-router-dom"


export default class CustomRoute {
    constructor (url, element, guards=[]){
        this.setUrl(url)
        this.element = element
        this.guards = guards
    }

    setUrl(url){
        this.url = url
        return this.url
    }

    render(key){
        let access = true
        let RejectComponent = null
        for (const [guard, reject] of this.guards){
            if (!guard()){
                access = false
                RejectComponent = reject
                break
            }
        }
        const element = access ? <this.element /> : <RejectComponent />
        return (<Route path={this.url} key={key} element={element} />)
    }  
} 