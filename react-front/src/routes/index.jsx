import { Routes, Route } from 'react-router-dom';
import  routes  from './route-list'
import Class from 'pages/class';



export default () => {
    return (
        <Routes>
          <Route path='/classes/:id' element={<Class />} />
          {/* {Object.keys(routes).map((elem, i) => <Route path={routes[elem].path} element={routes[elem].component()} />)} */}
        </Routes>
    )
  }
    
