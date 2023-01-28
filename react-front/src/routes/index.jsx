import Class from 'pages/class';
import Login from 'pages/login'
import Register from 'pages/register'
import CreateTest from 'pages/createTest'
import Tests from 'pages/tests'
import Test from 'pages/test';
import Routing from './customRouting';
import Route from './customRoute';
import Group from './routesGroup';
import TestPassing from 'pages/test-passing';
import Profile from 'pages/profile';



export default () => {
  return (
    <Routing>
      {/* <Route path='tests/:id/passing' element={<TestPassing />} /> */}
      <Group path='/classes'>
        <Route path='/:id' element={<Class />} />
      </Group>
      <Group path='/tests'>
        <Route path='/:id' element={<Test />} />
        <Route path='/:id/passing' element={<TestPassing />} />
        <Route path='' element={<Tests />} />
        <Route path='/create' element={<CreateTest />} />
      </Group>
      <Group path='/accounts'>
        <Route path='/profile' element={ <Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Group>
      <Route path='*' element={<Class />} />
    </Routing>
  )
}