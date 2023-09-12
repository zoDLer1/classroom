import * as Yup from 'yup';


export const SignupSchema = Yup.object().shape({
    email: Yup.string().required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле')
});

export const RegisterSchema = Yup.object().shape({
    first_name: Yup.string()
        .required('Заполните поле')
        .min(2, 'Поле должно содержать не менее 2 символов')
        .max(50, 'Поле должно содержать не более 50 символов'),
    last_name: Yup.string()
        .required('Заполните поле')
        .min(2, 'Поле должно содержать не менее 2 символов')
        .max(50, 'Поле должно содержать не более 50 символов'),
    email: Yup.string()
        .required('Заполните поле')
        .email('Введите правильный email')
        .min(2, 'Поле должно содержать не менее 2 символов')
        .max(50, 'Поле должно содержать не более 50 символов'),
    role: Yup.number()
        .required()
        .positive()
        .integer(),
    password: Yup.string()
        .required('Заполните поле')
        .min(6, 'Поле должно содержать не менее 6 символов'),
    password_confim: Yup.string()
        .required('Заполните поле')
        .min(6, 'Поле должно содержать не менее 6 символов'),
    lisence: Yup.boolean()
        .isTrue()
});