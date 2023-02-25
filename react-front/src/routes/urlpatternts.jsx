// import Route from "./routing"
// import RoutesGroup from "./routesGroup";
import { Route, RoutesGroup } from './routing';
import Class from 'pages/class';
import Login from 'pages/login'
import Register from 'pages/register'
import CreateTest from 'pages/createTest'
import Tests from 'pages/tests'
import Test from 'pages/test';
import TestPassing from 'pages/test-passing';
import Profile from 'pages/profile';
import { IsUserAuth } from "./guards";
import { redirect } from "./actions";


export default [
    new RoutesGroup('/classes', [
        new Route('/:id', Class, [IsUserAuth()])
    ]),
    new RoutesGroup('/tests', [
        new RoutesGroup('/:id', [
            new Route('', Test),
            new Route('/passing', TestPassing)
        ]),
        new Route('', Tests),
        new Route('/create', CreateTest)
    ], [IsUserAuth()]),


    new RoutesGroup('/accounts', [
        new Route('/profile', Profile),
        new Route('/login', Login),
        new Route('/register', Register)
    ]),
    new Route('*', redirect('/accounts/login'))
    
]