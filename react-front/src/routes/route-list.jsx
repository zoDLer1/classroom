import Login from 'pages/login'
import Register from 'pages/register'
import createTest from 'pages/createTest'
import tests from 'pages/tests'
import _class from 'pages/class'

export default {
    login: { path: '/login', component: Login },
    register: { path: '/register', component: Register },
    createTest: {path: '/tests/create', component: createTest},
    tests: {path: '/tests', component: tests},
    // class: {path: '/class/:id', component: _class}
}