import TestCreationForm from 'components/forms/TemplateCreationForm'
import useRequest from 'hooks/requests/useRequest'
import TestsServise from 'services/TestsService'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { TemplateCreationSchema } from 'validation/Schemes'
import ContentCenter from './containers/ContentCenter'

export const defaultTextAnswer = { value: '', isCorrect: true }

export const defaultManyAnswer = { name: '', isCorrect: false }

export const defaultAnswersValues = {
    1: [defaultTextAnswer],
    2: Array(4).fill(defaultManyAnswer),
    3: Array(4).fill(defaultManyAnswer)
}


export const defaultQuestionValue = {
    name: "",
    type: 1,
    time: "",
    answers: [defaultTextAnswer]
}





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
        <ContentCenter>
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
        </ContentCenter >
    )
}

export default CreateTemplatePage