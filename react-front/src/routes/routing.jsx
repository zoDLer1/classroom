import { Route as ReactRoute } from "react-router-dom"
import BaseRoute from "./baseRoute"
import ElementLayer from "./ElementLayer"

export class Route extends BaseRoute {

    render(key){
        return (<ReactRoute path={this.url} key={key} element={<ElementLayer element={<this.element />} guards={this.guards} />} />)
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