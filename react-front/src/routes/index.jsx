
import { Routes as ReactRoutes } from 'react-router-dom';
import { Route as ReactRoute } from "react-router-dom"
import Class from 'pages/ClassPage';
import LoginPage from 'pages/LoginPage';
import Register from 'pages/RegisterPage'
import Classes from 'pages/ClassesPage'
import TestsPassingPage from 'pages/TestPassingPage';
import Profile from 'pages/profile';
import CreateTemplatePage from 'pages/CreateTemplatePage'
import Templates from 'pages/TemplatesPage';
import ServerIsUnavalible from 'pages/server-is-unavailable';
import TestPage from 'pages/TestPage';
import WithGuards from './withGuards';
import Redirect from './Redirect';
import TemplatePage from 'pages/TemplatePage';
import { IsTeacher, IsUserAuth } from './Guards';
import PassedTestPage from 'pages/PassedTestPage';
import ClassJoinPage from 'pages/ClassJoinPage';

const Routes = () => {

    return (
        <>
            <ReactRoutes>
                <ReactRoute path='/accounts/login' element={<LoginPage />} />
                <ReactRoute path='/accounts/register' element={<Register />} />
                <ReactRoute path='/accounts/profile' element={<Profile />} />

                <ReactRoute path='/serverunavailable' element={<ServerIsUnavalible />} />

                <ReactRoute path='/classes/join/:uuid' element={
                    <WithGuards guards={
                        [
                            // {guard: IsUserAuth, onReject:Redirect('/accounts/login')}
                        ]
                    }>
                        <ClassJoinPage />
                    </WithGuards>
                } />
                <ReactRoute path='/classes' element={
                    <WithGuards guards={
                        [
                            // {guard: IsUserAuth, onReject: Redirect('/accounts/login')}
                        ]
                    }>
                        <Classes />
                    </WithGuards>
                } />
                <ReactRoute path='/classes/:id' element={
                    <Class />
                } />
                <ReactRoute path='/tests/templates/:id' element={
                    <WithGuards guards={
                        [
                            { guard: IsUserAuth, onReject: Redirect('/accounts/login') },
                            { guard: IsTeacher, onReject: Redirect('/classes') }
                        ]
                    }>
                        <TemplatePage />
                    </WithGuards>

                } />
                <ReactRoute path='/tests/templates/create' element={
                    <WithGuards guards={
                        [
                            // {guard: IsUserAuth, onReject: Redirect('/accounts/login')},
                            // {guard: IsTeacher, onReject: Redirect('/classes')}
                        ]
                    }>
                        <CreateTemplatePage />
                    </WithGuards>

                } />
                <ReactRoute path='/tests/templates' element={
                    <WithGuards guards={
                        [
                            { guard: IsUserAuth, onReject: Redirect('/accounts/login') },
                            { guard: IsTeacher, onReject: Redirect('/classes') }
                        ]
                    }>
                        <Templates />
                    </WithGuards>

                } />

                <ReactRoute path='/tests/pass/:id/' element={
                    <WithGuards guards={
                        [
                            { guard: IsUserAuth, onReject: Redirect('/accounts/login') },
                            // {guard: IsStudent, onReject: Redirect('/classes')},
                            // IsClassMember
                        ]
                    }>
                        <TestsPassingPage />
                    </WithGuards>
                } />

                <ReactRoute path='/tests/passed/:id/' element={
                    <WithGuards guards={
                        [
                            { guard: IsUserAuth, onReject: Redirect('/accounts/login') },
                            // {guard: IsStudent, onReject: Redirect('/classes')},
                            // IsClassMember
                        ]
                    }>
                        <PassedTestPage />
                    </WithGuards>
                } />

                <ReactRoute path='/tests/:id' element={
                    <WithGuards guards={
                        [
                            { guard: IsUserAuth, onReject: Redirect('/accounts/login') },
                            { guard: IsTeacher, onReject: Redirect('/classes') },
                            // IsClassMember
                        ]
                    }>
                        <TestPage />
                    </WithGuards>
                } />

                <ReactRoute path='*' element={
                    <WithGuards guards={
                        [
                            { guard: () => false, onReject: Redirect('/accounts/login') },
                            // IsClassMember
                        ]
                    }>
                        <></>
                    </WithGuards>
                } />
                <ReactRoute path='*' element={<></>} />
            </ReactRoutes>

        </>
    )
}

export default Routes