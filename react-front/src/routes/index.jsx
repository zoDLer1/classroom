import { Routes, Route } from 'react-router-dom';
import Login from 'pages/login'
import Register from 'pages/register'


export default () => {
    return (
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    )
}