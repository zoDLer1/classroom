
import { Routes as ReactRoutes } from 'react-router-dom';
import { Route as ReactRoute } from "react-router-dom"


// import urlpatternts from './urlpatternts';
// import { useEffect } from 'react';
import Class from 'pages/class';
import Login from 'pages/login'
import Register from 'pages/register'

import Classes from 'pages/classes'
import Test from 'pages/test';
import TestPassing from 'pages/test-passing';
import Profile from 'pages/profile';
import CreateTest from 'pages/createTest'
import Tests from 'pages/tests';
import ServerIsUnavalible from 'pages/server-is-unavailable';
import EditTest from 'pages/test-edit';


const Routes = () => {

  // const navigate = useNavigate()
  // const location = useLocation()

  // {urlpatternts.map((route, index) => route.render(index, user))}
  
  return (
    <>
      
      <ReactRoutes>
        <ReactRoute path='/classes' element={<Classes/>}/>
        <ReactRoute path='/classes/:id' element={<Class/>}/>
        <ReactRoute path='/accounts/login' element={<Login/>}/>
        <ReactRoute path='/tests/create' element={<CreateTest/>}/>
        <ReactRoute path='/tests' element={<Tests/>}/>
        <ReactRoute path='/tests/:id/edit' element={<EditTest/>}/>
        <ReactRoute path='/tests//:id/passing' element={<TestPassing/>}/>
        <ReactRoute path='/tests/:id' element={<Test/>}/>
        <ReactRoute path='/accounts/profile' element={<Profile/>}/>
        <ReactRoute path='/accounts/register' element={<Register/>}/>
        <ReactRoute path='/serverunavailable' element={<ServerIsUnavalible/>}/>

        <ReactRoute path='*' element={<></>}/>
      </ReactRoutes>
      
    </>
  )
}

export default Routes