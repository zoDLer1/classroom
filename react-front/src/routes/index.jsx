import Settings from 'components/forms/components/sections/Settings';
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
import TemplatePage from 'pages/TemplatePage';
import PassedTestPage from 'pages/PassedTestPage';
import ClassJoinPage from 'pages/ClassJoinPage';
import AuthRoute from './AuthRoute';
import { useInitialRequest } from 'hooks/useInitialRequest';
import AuthService from 'services/AuthService';
import { useUser } from 'hooks/user/useUser';
import Tests from 'components/forms/components/sections/Tests';
import Members from 'components/forms/components/sections/Members';
import CreationMode from 'pages/modes/CreationMode';



const Routes = () => {

    const user = useUser()

    const [waitForResponse] = useInitialRequest({}, AuthService.refresh_token, {
        200: (response) => user.authenticate(response.data.user, response.data.access)
    })

    return (

        <ReactRoutes>

            <ReactRoute path='/accounts/login' element={<LoginPage />} /> {/*//* DONE  */}
            <ReactRoute path='/accounts/register' element={<Register />} /> {/*//* DONE  */}
            <ReactRoute element={<AuthRoute waitForResponse={waitForResponse} />}> {/*//* DONE  */}

                <ReactRoute path='/classes' element={<Classes />} />  {/*//* DONE  */}
                <ReactRoute path='/classes/:id/' element={<Class />}> {/*//* DONE  */}
                    <ReactRoute path='tests' element={<Tests />} /> {/*//* DONE  */}
                    <ReactRoute path='members' element={<Members />} /> {/*//* DONE  */}
                    <ReactRoute path='settings' element={<Settings />} /> {/*//* DONE  */}
                </ReactRoute>

                <ReactRoute path='/tests/templates' element={<Templates />} /> {/*//! In Development  */}

                <ReactRoute path='/tests/templates/create' element={<CreateTemplatePage mode={false} />}>
                    {/* <ReactRoute path='edit' element={<CreationMode />} />  
                    <ReactRoute path='view' element={<CreationMode />} /> */}
                </ReactRoute>
                <ReactRoute path='/tests/templates/view' element={<CreateTemplatePage mode={true} />}/>



                <ReactRoute path='/accounts/profile' element={<Profile />} />
                <ReactRoute path='/serverunavailable' element={<ServerIsUnavalible />} />
                <ReactRoute path='/classes/join/:uuid' element={<ClassJoinPage />} />

                <ReactRoute path='/tests/templates/:id' element={<TemplatePage />} />


                <ReactRoute path='/tests/pass/:id/' element={<TestsPassingPage />} />
                <ReactRoute path='/tests/passed/:id/' element={<PassedTestPage />} />
                <ReactRoute path='/tests/:id' element={<TestPage />} />
            </ReactRoute>


            {/* <ReactRoute path='*' element={<></>} /> */}
        </ReactRoutes>
    )
}

export default Routes