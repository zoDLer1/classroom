import css from './css/test.module.css'
import FormHeader from 'components/forms/components/tests/TestHeader'
import QuestionList from 'components/forms/components/tests/QuestionList'
import useForm from 'hooks/forms/useForm'
import { MIN_LENGTH__VALIDATOR, REQUIRED__VALIDATOR } from 'validation/validators'
import React from 'react'
{/* <FormFooter submit={getSubmit} mode={mode} setMode={setMode} /> */ }

const TemplateCreationForm = ({ request, mode, data, children }) => {

    const { name, description, questions } = data




    const { isEdited, getInput, getModule, getSubmit } = useForm({
        name: {
            value: name || '',
            validators: [REQUIRED__VALIDATOR()]
        },
        description: {
            value: description || ''
        },
        questions: {
            value: questions || [],
            validators: [MIN_LENGTH__VALIDATOR(1, { 'detail': 'Должно быть не менее 1 вопроса' })],
            isModule: true

        },

    }, request)




    return (
        <div className={css.block}>

            <FormHeader mode={mode} getInput={getInput} />
            <QuestionList mode={mode} module={getModule('questions')} />
            {React.cloneElement(children, { submit: getSubmit, isEdited })}
        </div>
    )
}

export default TemplateCreationForm