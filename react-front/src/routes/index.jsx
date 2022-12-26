import { Routes, Route } from 'react-router-dom';
import Login from 'pages/login'
import Register from 'pages/register'
import  routes  from './route-list'




export default () => {
    return (
        <Routes>
          {Object.keys(routes).map((elem, i) => <Route path={routes[elem].path} element={routes[elem].component()} />)}
        </Routes>
    )
  }
    
