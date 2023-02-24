import { Route as ReactRoute } from "react-router-dom"
import BaseRoute from "./baseRoute"

export class Route extends BaseRoute {

    render(key){
        let access = true
        let RejectComponent = null
        for (const [guard, reject] of this.guards){
            if (!guard){
                access = false
                RejectComponent = reject
                break
            }
        }
        const element = access ? <this.element /> : <RejectComponent />
        return (<ReactRoute path={this.url} key={key} element={element} />)
    }  
} 

export class RoutesGroup extends BaseRoute {

    render(key){
        return this.element.map(
                (route, index) => {
                    route.setGuards([...route.guards, ...this.guards])
                    route.setUrl(this.url+route.url)              
                    return route.render(key+"-"+index)
                })
            
        
    }  
} 