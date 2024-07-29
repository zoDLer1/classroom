import { Role } from './user';

export interface UserLoginDTS {
    email: string;
    password: string;
}
export interface UserRegisterDTS {
    first_name: string;
    last_name: string;
    email: string;
    role: Role;
    password: string;
    repeat_password: string;
}
