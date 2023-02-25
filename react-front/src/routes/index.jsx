
import { Routes as ReactRoutes } from 'react-router-dom';
import urlpatternts from './urlpatternts';
import user from 'store/user';
import { useEffect } from 'react';


const Routes = () => {

  // const navigate = useNavigate()
  // const location = useLocation()

  useEffect (()=> {
    console.log([... urlpatternts.map((route, index) => route.render(index, user))])
  }, [user.isAuth])

  
  return (
    <>
      
      <ReactRoutes>
        {urlpatternts.map((route, index) => route.render(index, user))}
      </ReactRoutes>
      
    </>
  )
}

export default Routes