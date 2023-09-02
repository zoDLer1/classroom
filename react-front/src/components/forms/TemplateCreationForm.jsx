import css from './css/test.module.css'
import FormHeader from 'components/forms/components/tests/TestHeader'
import QuestionList from 'components/forms/components/tests/QuestionList'
import { Form } from 'formik'
import { faSquarePlus, faBan, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import Action from 'components/UI/inputs/Action'
import footerCss from 'components/forms/components/tests/css/footer.module.css'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const Footer = ({ submit, mode }) => {
 
    return <div className={footerCss.block}>
        <div className={footerCss.group}>
            <Action onClick={submit} text={'Создать'} icon={faSquarePlus}></Action>
            <Action text={'Вид'} icon={!mode ? faEyeSlash : faEye}></Action>
        </div>
        {/* <Action text={'Отменить'} onClick={() => navigate('/tests/templates')} styleAction={'error'} icon={faBan}></Action> */}
    </div>
}


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



const TemplateCreationForm = ({ errors, values, handleSubmit }) => {
    
    return (<Form
        className={css.block}>
        <FormHeader />
        <QuestionList values={values} />
        <Footer submit={handleSubmit} />
    </Form>)
}



export default TemplateCreationForm