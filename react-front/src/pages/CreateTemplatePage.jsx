import css from './pages.module.css'
import TestCreationForm from 'components/forms/TemplateCreationForm'
import useRequest from 'hooks/requests/useRequest'
import TestsServise from 'services/TestsService'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'
import { defaultQuestionValue } from 'components/forms/TemplateCreationForm'



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
        .max(70, 'Поле должно содержать не более 70 символов'),
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
        .max(70, 'Поле должно содержать не более 70 символов'),

    description: Yup.string()
        .max(255, 'Поле должно содержать не более 255 символов'),

    questions: Yup.array()
        .of(QuestionSchema)
});




const CreateTemplatePage = () => {



    const navigate = useNavigate()

    const [create] = useRequest(
        TestsServise.createTemplate,
        {
            201: () => {
                navigate('/tests/templates')
            }
        }
    )

    return (
        <div className={css.section}>
            <Formik
                validationSchema={TemplateCreationSchema}
                validateOnChange={false}
                validateOnMount={false}
                initialValues={
                    {
                        name: "",
                        description: "",
                        questions: Array(2).fill(defaultQuestionValue)
                    }

                }
                onSubmit={(values) => create(values)}
            >
                {TestCreationForm}
            </Formik>
        </div >
    )
}

export default CreateTemplatePage