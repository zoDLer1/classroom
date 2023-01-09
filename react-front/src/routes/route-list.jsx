import Login from 'pages/login'
import Register from 'pages/register'
import createTest from 'pages/createTest'


export default {
    login: { path: '/login', component: Login },
    register: { path: '/register', component: Register },
    createTest: {path: '/tests/create', component: createTest}
}