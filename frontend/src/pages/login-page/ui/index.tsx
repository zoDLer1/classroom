import { type FC } from 'react';
import { LoginForm } from '@entities/user';

interface ILoginPageProps {
}

export const LoginPage: FC<ILoginPageProps> = () => {
    return (
        <div className='h-screen flex-ic-jc'>
            <LoginForm />
        </div>
    );
};
