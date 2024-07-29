import { number, object, string, type ObjectSchema } from 'yup';
import { Role, UserLoginDTS, UserRegisterDTS } from '../types';

export const userRegisterValidationSchema: ObjectSchema<UserRegisterDTS> = object({
    first_name: string()
        .trim()
        .required('Обязательное поле')
        .min(2, 'Минимальная длинна 2 символа')
        .max(128, 'Максимальная длинна 128 символов'),
    last_name: string()
        .trim()
        .required('Обязательное поле')
        .min(2, 'Минимальная длинна 2 символа')
        .max(128, 'Максимальная длинна 128 символов'),
    email: string()
        .trim()
        .required('Обязательное поле')
        .max(256, 'Максимальная длинна 256 символов')
        .matches(
            /^[A-za-z0-9_\.]+\@[[A-za-z0-9_\.]+\.[aA-zZ]{1,10}$/,
            'E-mail должен быть корректным',
        ),
    role: number()
        .required('Обязательное поле')
        .oneOf(Object.values(Role) as number[], 'Некорректная роль'),
    password: string()
        .trim()
        .min(6, 'Минимальная длинна пароля 6 символов')
        .required('Обязательное поле'),
    repeat_password: string()
        .min(6, 'Минимальная длинна пароля 6 символов')
        .required('Обязательное поле'),
});

export const userLoginValidationSchema: ObjectSchema<UserLoginDTS> = object({
    // email: string().trim().matches(
    //     /^[A-za-z0-9_\.]+\@[[A-za-z0-9_\.]+\.[aA-zZ]{1,10}$/,
    //     'E-mail должен быть корректным',
    // )
    //     .required('Обязательное поле'),

    password: string().trim().required('Обязательное поле'),
});
