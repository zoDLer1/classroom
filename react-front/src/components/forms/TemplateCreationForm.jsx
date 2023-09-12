import css from './css/test.module.css'
import FormHeader from 'components/forms/TestHeader'
import QuestionList from 'components/lists/QuestionList'
import { Form } from 'formik'
import { useHeader, useHeaderBack } from 'hooks/globalUI/useGlobalUI'
import { useEffect, useState, useRef } from 'react'
import { faPlus, faFileImport, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { TemplateCreationSchema } from 'pages/CreateTemplatePage'


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
    time: undefined,
    answers: [defaultTextAnswer]
}





const TemplateCreationForm = ({ values, handleSubmit, errors, setValues }) => {

    useHeaderBack()
    const { setAction, editAction } = useHeader()

    const uploadRef = useRef()

    const [viewMode, setMode] = useState(false)

    useEffect(() => {
        setAction(0,
            [
                { icon: faPlus, text: 'Создать', action: handleSubmit },
                { icon: faFileImport, text: 'Загрузить', action: () => uploadRef.current.click() },
                { icon: faEye, text: 'Просмотр', action: () => setMode((mode) => !mode) }
            ]
        )
    }, [])


    useEffect(() => {
        editAction(0, 2, { icon: viewMode ? faEyeSlash : faEye })
    }, [viewMode])


    const uploadInfo = (evt) => {
        const file = evt.target.files[0]
        const reader = new FileReader()
        reader.onload = (event) => {
            const json_data = JSON.parse(event.target.result)
            TemplateCreationSchema.validate(json_data)
                .then(
                    (value) => {
                        setMode(true)
                        setValues(value)
                    }
                )
                .catch((error) => {
                    console.log(error)
                })
        }
        reader.readAsText(file)
    }

    return (
        <>
            <Form
                className={css.block}>
                <FormHeader viewMode={viewMode} />
                <QuestionList viewMode={viewMode} values={values} />
            </Form>
            <input onChange={uploadInfo} type='file' accept='.json' ref={uploadRef} hidden />
        </>
    )
}



export default TemplateCreationForm