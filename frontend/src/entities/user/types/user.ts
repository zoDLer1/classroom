export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    role: Role;
}
export interface ITokens {
    access: string;
}

export enum Role {
    STUDENT = 1,
    TEACHER = 2,
}
