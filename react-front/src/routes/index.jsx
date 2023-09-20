
import { Routes as ReactRoutes, Route as ReactRoute, Navigate } from 'react-router-dom';
import Class from 'pages/layouts/ClassPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage'
import Classes from 'pages/ClassesPage'
import TestsPassingPage from 'pages/TestPassingPage';
import CreateTemplatePage from 'pages/CreateTemplatePage'
import Templates from 'pages/TemplatesPage';
import ServerIsUnavalible from 'pages/ServerIsUnavalible';
import TestPage from 'pages/layouts/TestPage';
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
import QuestionPassingPage from 'pages/QuestionPassingPage';
import SignLayout from 'pages/layouts/SignLayout';
import PassedTestsForm from "components/forms/PassedTestsForm"
import InDevelopnemtPage from 'pages/InDevelopnemtPage';
import TestSettingsPage from 'pages/TestSettingsPage';
import PassedTestsStatisticForm from 'components/forms/PassedTestsStatisticForm';


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
                <ReactRoute path='/' element={<Navigate replace to={'/classes'} />} />
                <ReactRoute path='/classes' element={<Classes />} />
                <ReactRoute path='/classes/:id' element={<Class />}>
                    <ReactRoute path='tests' element={<ClassTestsPage />} />
                    <ReactRoute path='members' element={<ClassMembersPage />} />
                    <ReactRoute path='settings' element={<ClassSettingsPage />} />
                </ReactRoute>
                <ReactRoute path='/tests/templates' element={<Templates />} />
                <ReactRoute path='/tests/templates/create' element={<CreateTemplatePage />} />
                <ReactRoute path='/tests/templates/:id' element={<TemplatePage />} />
                <ReactRoute path='/tests/pass/:id/' element={<TestsPassingPage />} />
                <ReactRoute path='/tests/pass/:passed_test/question/:question' element={<QuestionPassingPage />} />
                <ReactRoute path='/tests/passed/:id/' element={<PassedTestPage />} />
                <ReactRoute path='/tests/:id' element={<TestPage />}>
                    <ReactRoute path='results' element={<PassedTestsForm />} />
                    <ReactRoute path='settings' element={<TestSettingsPage />} />
                    <ReactRoute path='statistic' element={<PassedTestsStatisticForm />} />
                </ReactRoute>
                <ReactRoute path='/accounts/profile' element={<InDevelopnemtPage />} />
                <ReactRoute path='/serverunavailable' element={<ServerIsUnavalible />} />
                <ReactRoute path='/classes/join/:uuid' element={<ClassJoinPage />} />
            </ReactRoute>
        </ReactRoutes>
    )
}

export default Routes