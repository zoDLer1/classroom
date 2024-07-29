import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '@pages/login-page';
import { RegisterPage } from '@pages/register-page';
import { DefaultLayout } from '@shared';
import { refreshToken } from '@entities/user';

export default createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        loader: () => {
            const authData = refreshToken();
            return { authData };
        },
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },
]);
