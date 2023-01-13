import Class from 'pages/class';
import Login from 'pages/login'
import Register from 'pages/register'
import CreateTest from 'pages/createTest'
import Tests from 'pages/tests'
import Routing from './customRouting';
import Route from './customRoute';
import Group from './routesGroup';

export default () => {
  return (
    <Routing>
      <Route path='/classes/:id' element={<Class />} />
      <Group path='/tests'>
        <Route path='/:id' element={<Tests />} />
        <Route path='' element={<Tests />} />
        <Route path='/create' element={<CreateTest />} />
      </Group>
      <Group path='/accounts'>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Group>
    </Routing>
  )
}