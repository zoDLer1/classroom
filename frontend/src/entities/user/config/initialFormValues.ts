import { UserLoginDTS, UserRegisterDTS } from '../types';

export const registerForminitialValues: UserRegisterDTS = {
    first_name: '',
    last_name: '',
    email: '',
    role: null,
    password: '',
    repeat_password: '',
};

export const loginForminitialValues: UserLoginDTS = {
    email: '',
    password: '',
};
