
import { Routes as ReactRoutes, Route as ReactRoute, Navigate } from 'react-router-dom';
import Class from 'pages/layouts/ClassPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage'
import Classes from 'pages/ClassesPage'
import TestsPassingPage from 'pages/TestPassingPage';
import Profile from 'pages/profile';
import CreateTemplatePage from 'pages/CreateTemplatePage'
import Templates from 'pages/TemplatesPage';
import ServerIsUnavalible from 'pages/ServerIsUnavalible';
import TestPage from 'pages/TestPage';
import TemplatePage from 'pages/TemplatePage';
import PassedTestPage from 'pages/PassedTestPage';
import ClassJoinPage from 'pages/ClassJoinPage';
import AuthLayout from '../pages/layouts/AuthLayout';
import { useInitialRequest } from 'hooks/requests/useInitialRequest';
import AuthService from 'services/AuthService';
import { useUser } from 'hooks/store/useUser';
import ClassTestsPage from 'pages/ClassTestsPage';
import ClassMembersPage from 'pages/ClassMembersPage';
import ClassSettingsPage from 'pages/ClassSettingsPage';
import TemplateCreationForm from 'components/forms/TemplateCreationForm';
import QuestionPassingPage from 'pages/QuestionPassingPage';
import SignLayout from 'pages/layouts/SignLayout';


const Routes = () => {

    const user = useUser()

    const [waitForResponse] = useInitialRequest({}, AuthService.refresh_token, {
        200: (response) => user.authenticate(response.data.user, response.data.access)
    })

    return (

        <ReactRoutes>
            <ReactRoute path='/accounts' element={<SignLayout />}>
                <ReactRoute path='login' element={<LoginPage />} />
                <ReactRoute path='register' element={<RegisterPage />} />
            </ReactRoute>


            <ReactRoute element={<AuthLayout waitForResponse={waitForResponse} />}>

                <ReactRoute path='/' element={<Navigate to={'/classes'} />} />
                <ReactRoute path='/classes' element={<Classes />} />  {/*//* DONE  */}
                <ReactRoute path='/classes/:id' element={<Class />}> {/*//* DONE  */}
                    <ReactRoute path='tests' element={<ClassTestsPage />} /> {/*//* DONE  */}
                    <ReactRoute path='members' element={<ClassMembersPage />} /> {/*//* DONE  */}
                    <ReactRoute path='settings' element={<ClassSettingsPage />} /> {/*//* DONE  */}
                </ReactRoute>

                <ReactRoute path='/tests/templates' element={<Templates />} /> {/*//* DONE  */}

                <ReactRoute path='/tests/templates/create' element={<CreateTemplatePage />} /> {/*//* DONE  */}
                <ReactRoute path='/tests/templates/:id' element={<TemplatePage />} />
                <ReactRoute path='/tests/pass/:id/' element={<TestsPassingPage />} />
                <ReactRoute path='/tests/pass/:passed_test/question/:question' element={<QuestionPassingPage />} />
                <ReactRoute path='/tests/passed/:id/' element={<PassedTestPage />} />


                <ReactRoute path='/accounts/profile' element={<Profile />} />
                <ReactRoute path='/serverunavailable' element={<ServerIsUnavalible />} />
                <ReactRoute path='/classes/join/:uuid' element={<ClassJoinPage />} />






                <ReactRoute path='/tests/:id' element={<TestPage />} />
            </ReactRoute>



        </ReactRoutes>
    )
}

export default Routes