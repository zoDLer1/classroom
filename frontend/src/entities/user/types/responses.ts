import { ITokens, IUser } from './user';

export interface UserAuthResponse {
    tokens: ITokens;
    user: IUser;
}
