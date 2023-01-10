import Login from 'pages/login'
import Register from 'pages/register'
import createTest from 'pages/createTest'
import tests from 'pages/tests'


export default {
    login: { path: '/login', component: Login },
    register: { path: '/register', component: Register },
    createTest: {path: '/tests/create', component: createTest},
    tests: {path: '/tests', component: tests}
}