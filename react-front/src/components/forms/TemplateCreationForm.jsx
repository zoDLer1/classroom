import FormHeader from 'components/forms/TestHeader'
import QuestionList from 'components/lists/QuestionList'
import { Form } from 'formik'
import { useHeader, useHeaderBack } from 'hooks/globalUI/useGlobalUI'
import { useEffect, useState, useRef } from 'react'
import { faPlus, faFileImport, faEye, faEyeSlash, faFileExport } from '@fortawesome/free-solid-svg-icons'
import { TemplateCreationSchema } from 'validation/Schemes'






const TemplateCreationForm = ({ values, handleSubmit, setValues, validateForm, initialViewMode = false, viewActions = true }) => {

    useHeaderBack()
    const { setAction, editAction } = useHeader()

    const importRef = useRef()

    const exportRef = useRef()

    const [viewMode, setMode] = useState(initialViewMode)


    useEffect(() => {
        if (viewActions)
            setAction(0,
                [
                    { icon: faPlus, text: 'Создать', action: handleSubmit },
                    { icon: faFileImport, text: 'Загрузить', action: () => importRef.current.click() },
                    { icon: faFileExport, text: 'Экспорт', action: () => exportRef.current.click() },
                    {
                        icon: viewMode ? faEyeSlash : faEye, text: 'Просмотр', action: async () => {
                            const errors = await validateForm()

                            if (!Object.keys(errors).length) {
                                setMode((mode) => !mode)
                            }
                        }
                    }
                ]
            )
    }, [])


    useEffect(() => {
        editAction(0, 3, { icon: viewMode ? faEyeSlash : faEye })
    }, [viewMode])


    const importInfo = (evt) => {
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
    const exportInfo = () => {
        const { name, description, questions } = values
        return {
            name,
            description,
            questions: questions.map(({ name, time, type, answers }) => ({ name, time, type, answers: answers.map(({ name, isCorrect, value }) => ({ name, isCorrect, value })) }))
        }
    }

    return (
        <>
            <Form className='flex flex-col my-[70px] gap-10'>
                <FormHeader viewMode={viewMode} />
                <QuestionList viewMode={viewMode} values={values} />
            </Form>
            <a ref={exportRef} hidden href={'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportInfo()))} download={`${values.name}.json`}></a>
            <input onChange={importInfo} type='file' accept='.json' ref={importRef} hidden />
        </>
    )
}



export default TemplateCreationForm