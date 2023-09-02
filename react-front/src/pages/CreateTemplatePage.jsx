import css from './pages.module.css'
import PageSection from 'components/pageSection'
import TestCreationForm from 'components/forms/TemplateCreationForm'
import useRequest from 'hooks/useRequest'
import TestsServise from 'services/TestsService'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup';


const ManyAnswerSchema = Yup.object().shape({
    isCorrect: Yup.boolean(),
    name: Yup.string()
        .required('Обязательное поле')
        .min(2, 'Поле должно содержать не менее 2 символов')
        .max(50, 'Поле должно содержать не более 50 символов')
})

const TextAnswerSchema = Yup.object().shape({
    value: Yup.string()
        .required('Обязательное поле')
        .min(2, 'Поле должно содержать не менее 2 символов')
        .max(50, 'Поле должно содержать не более 50 символов'),
    isCorrect: Yup.boolean(),
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
        .integer()
        .positive(),
    answers: Yup.array()
        .of(Yup.lazy((value) => {
            if(value.hasOwnProperty('name')){
                return ManyAnswerSchema
            }
            return TextAnswerSchema
        }))
})

const TemplateCreationSchema = Yup.object().shape({
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

    const create = useRequest(
        TestsServise.createTemplate,
        {
            201: () => {
                navigate('/tests/templates')
            }
        }
    )
    const questions = [
        {
            "name": "What is the capital city of France?",
            "type": 2,
            "time": 7,
            "answers": [
                { "name": "London", "isCorrect": false },
                { "name": "Madrid", "isCorrect": false },
                { "name": "Paris", "isCorrect": true },
                { "name": "Berlin", "isCorrect": false }
            ]
        },
        {
            "name": "Which of the following is the longest river in the world?",
            "type": 2,
            "time": 6,
            "answers": [
                { "name": "Mississippi River", "isCorrect": false },
                { "name": "Nile River", "isCorrect": true },
                { "name": "Amazon River", "isCorrect": false },
                { "name": "Yangtze River", "isCorrect": false }
            ]
        },
        {
            "name": "Which continent is known as the 'Land Down Under'?",
            "type": 2,
            "time": 9,
            "answers": [
                { "name": "Asia", "isCorrect": false },
                { "name": "Europe", "isCorrect": false },
                { "name": "Africa", "isCorrect": false },
                { "name": "Australia", "isCorrect": true }
            ]
        },
        {
            "name": "Which mountain range runs along the border between India and Nepal?",
            "type": 2,
            "time": 5,
            "answers": [
                { "name": "Andes Mountains", "isCorrect": false },
                { "name": "Rocky Mountains", "isCorrect": false },
                { "name": "Alps", "isCorrect": false },
                { "name": "Himalayas", "isCorrect": true }
            ]
        },
        {
            "name": "Which of the following countries is the largest by land area?",
            "type": 2,
            "time": 8,
            "answers": [
                { "name": "Russia", "isCorrect": true },
                { "name": "Canada", "isCorrect": false },
                { "name": "China", "isCorrect": false },
                { "name": "United States", "isCorrect": false }
            ]
        },
        {
            "name": "What is the largest ocean in the world?",
            "type": 2,
            "time": 10,
            "answers": [
                { "name": "Atlantic Ocean", "isCorrect": false },
                { "name": "Indian Ocean", "isCorrect": false },
                { "name": "Arctic Ocean", "isCorrect": false },
                { "name": "Pacific Ocean", "isCorrect": true }
            ]
        },
        {
            "name": "Which desert is often referred to as the 'Sahara of North America'?",
            "type": 2,
            "time": 5,
            "answers": [
                { "name": "Sahara Desert", "isCorrect": false },
                { "name": "Gobi Desert", "isCorrect": false },
                { "name": "Atacama Desert", "isCorrect": false },
                { "name": "Sonoran Desert", "isCorrect": true }
            ]
        },
        {
            "name": "What is the northernmost capital city in the world?",
            "type": 2,
            "time": 7,
            "answers": [
                { "name": "Oslo", "isCorrect": false },
                { "name": "Reykjavik", "isCorrect": true },
                { "name": "Stockholm", "isCorrect": false },
                { "name": "Helsinki", "isCorrect": false }
            ]
        },
        {
            "name": "Which of the Great Lakes is the largest by surface area?",
            "type": 2,
            "time": 6,
            "answers": [
                { "name": "Lake Superior", "isCorrect": true },
                { "name": "Lake Huron", "isCorrect": false },
                { "name": "Lake Michigan", "isCorrect": false },
                { "name": "Lake Erie", "isCorrect": false }
            ]
        },
        {
            "name": "In which country would you find the ancient city of Machu Picchu?",
            "type": 2,
            "time": 9,
            "answers": [
                { "name": "Mexico", "isCorrect": false },
                { "name": "Peru", "isCorrect": true },
                { "name": "Brazil", "isCorrect": false },
                { "name": "Chile", "isCorrect": false }
            ]
        }
    ]
    return (
        <PageSection className={css.section}>

            <Formik
                validationSchema={TemplateCreationSchema}
                validateOnChange={false}
                validateOnMount={false}
                initialValues={
                    {
                        "name": "Geography Test",
                        "description": "Test your knowledge of world geography with these multiple-choice questions.",
                        "questions": questions
                    }

                }
                onSubmit={(values) => console.log(values)}
            >
                {TestCreationForm}
            </Formik>
        </PageSection >
    )
}

export default CreateTemplatePage