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

export const ClassValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Заполните поле')
        .min(2, 'Поле должно содержать не менее 2 символов')
        .max(50, 'Поле должно содержать не более 50 символов'),
    subject: Yup.number()
        .required()
        .positive()
        .integer(),
    subject: Yup.number()
        .required()
        .positive()
        .integer(),

    description: Yup.string()
        .notRequired()
        .max(255, 'Поле должно содержать не более 255 символов'),

    settings: Yup.object().shape({
        allow_view_members_list: Yup.boolean()
            .required()
    })
})


const ManyAnswerSchema = Yup.object().shape({
    isCorrect: Yup.boolean(),
    name: Yup.string()
        .required('Обязательное поле')
        .max(50, 'Поле должно содержать не более 50 символов')
        .default(null)
})

const TextAnswerSchema = Yup.object().shape({
    value: Yup.string()
        .required('Обязательное поле')
        .max(50, 'Поле должно содержать не более 50 символов')
        .default(null),
    isCorrect: Yup.boolean(),
})

const AnswerSchema = Yup.lazy((value) => {
    if (value.hasOwnProperty('name')) {
        return ManyAnswerSchema
    }
    return TextAnswerSchema
})

const QuestionSchema = Yup.object().shape({
    name: Yup.string()
        .required('Обязательное поле')
        .min(2, 'Поле должно содержать не менее 2 символов')
        .max(115, 'Поле должно содержать не более 115 символов'),
    type: Yup.number()
        .required('Обязательное поле')
        .min(1)
        .max(3),
    time: Yup.number()
        .notRequired()
        .integer()
        .positive(),
    answers: Yup.array()
        .of(AnswerSchema)
})

export const TemplateCreationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Обязательное поле')
        .min(2, 'Поле должно содержать не менее 2 символов')
        .max(115, 'Поле должно содержать не более 115 символов'),

    description: Yup.string()
        .max(255, 'Поле должно содержать не более 255 символов'),

    questions: Yup.array()
        .of(QuestionSchema)
});