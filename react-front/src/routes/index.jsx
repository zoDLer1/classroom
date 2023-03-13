
import { Routes as ReactRoutes } from 'react-router-dom';
import { Route as ReactRoute } from "react-router-dom"
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
import WithGuards from './withGuards';
import Redirect from './Redirect';
import { IsStudent, IsTeacher, IsUserAuth } from './Guards';



const Routes = () => {
  
  return (
    <>
      
      <ReactRoutes>

        <ReactRoute path='/accounts/login' element={<Login/>}/>
        <ReactRoute path='/accounts/register' element={<Register/>}/>
        <ReactRoute path='/serverunavailable' element={<ServerIsUnavalible/>}/>


        <ReactRoute path='/accounts/profile' element={
          <WithGuards guards={
              [
                {guard: IsUserAuth, onReject:Redirect('/accounts/login')}
              ]
            }>
            <Profile/>
          </WithGuards>
        }/>


        <ReactRoute path='/classes' element={
          <WithGuards guards={
            [
              {guard: IsUserAuth, onReject: Redirect('/accounts/login')}
            ]
          }>
            <Classes/>
          </WithGuards>
        }/>

        <ReactRoute path='/classes/:id' element={
          <Class/>
        }/>
        
        <ReactRoute path='/tests/create' element={
            <WithGuards guards={
              [
                {guard: IsUserAuth, onReject: Redirect('/accounts/login')},
                {guard: IsTeacher, onReject: Redirect('/classes')}
              ] 
            }>
            <CreateTest/>
          </WithGuards>
            
        }/>
        <ReactRoute path='/tests' element={
          <WithGuards guards={
            [
              {guard: IsUserAuth, onReject: Redirect('/accounts/login')},
              {guard: IsTeacher, onReject: Redirect('/classes')}
            ] 
          }>
            <Tests/>
          </WithGuards>
          
        }/>
        <ReactRoute path='/tests/:id/edit' element={
          <WithGuards guards={
            [
              {guard: IsUserAuth, onReject: Redirect('/accounts/login')},
              {guard: IsTeacher, onReject: Redirect('/classes')},
              // IsOwner
            ] 
          }>
            <EditTest/>
          </WithGuards>
          
        
        }/>
        
        <ReactRoute path='/tests/:id/passing' element={
          <WithGuards guards={
            [
              {guard: IsUserAuth, onReject: Redirect('/accounts/login')},
              {guard: IsStudent, onReject: Redirect('/classes')},
              // IsClassMember
            ]
          }>
            <TestPassing/>
          </WithGuards>
        }/>
        
        <ReactRoute path='/tests/:id' element={
          <WithGuards guards={
              [
                {guard: IsUserAuth, onReject: Redirect('/accounts/login')},
                {guard: IsTeacher, onReject: Redirect('/classes')},
                // IsClassMember
              ]
            }>
            <Test/>
          </WithGuards>
        }/>
        
        <ReactRoute path='*' element={<></>}/>
      </ReactRoutes>
      
    </>
  )
}

export default Routes