import { ApiInstanse } from '@shared';
import { UserLoginDTS } from '../types';
import { UserAuthResponse } from '../types/responses';
import { AxiosResponse } from 'axios';

export const loginRequest = async (data: UserLoginDTS) => {
    return await ApiInstanse.post<UserAuthResponse>('/users/login/', data);
};

export const refreshToken = async () => {
    return await ApiInstanse.post<UserAuthResponse>('/users/refresh/');
};
// ApiInstanse;
// /users/login/
