import { RegisterForm } from '@entities/user';
import { type FC } from 'react';

interface IRegisterPageProps {
}

export const RegisterPage: FC<IRegisterPageProps> = () => {
    return (
        <div className='h-screen flex-ic-jc'>
            <RegisterForm />
        </div>
    );
};
