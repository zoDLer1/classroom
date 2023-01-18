import { Routes, Route } from 'react-router-dom';
import WithRouter from 'routes/withRouter'


export default (props) =>  {
    const children = Array.isArray(props.children) ? props.children : [props.children]
    return (
        <Routes>
            {children.map(({ props }, index) => 
            props.children === undefined
            ? <Route key={index} path={props.path} element={
                <WithRouter>
                    {props.element}
                </WithRouter>
            } />
            : (Array.isArray(props.children) ? props.children : [props.children]).map((item, index) => 
            <Route key={index} path={props.path+item.props.path} element={
                <WithRouter>
                    {item.props.element}
                </WithRouter>
            } />))}
        </Routes>
    )
}
