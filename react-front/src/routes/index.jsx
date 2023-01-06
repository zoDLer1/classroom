import { Routes, Route } from 'react-router-dom';
import  routes  from './route-list'




export default () => {
    return (
        <Routes>
          {Object.keys(routes).map((elem, i) => <Route path={routes[elem].path} element={routes[elem].component()} />)}
        </Routes>
    )
  }
    
