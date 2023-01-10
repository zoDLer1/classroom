import css from './css/test-creation-form.module.css'
import FormHeader from './components/form-header'
import QuestionList from './components/question-list'
import FromFooter from './components/from-footer'
import { useState } from 'react'

export default () =>  {


    const defaultQuestionValue = {name: '', answer_type: {name: 'Text', id: 1}, time: '',  answer: '', required: false, photos:[]}
    const [formData, setData] = useState({name: '', description: '', time: '', type: {name:'Simple', id: 1}, questions: [defaultQuestionValue, defaultQuestionValue]})


    const setHeader = (key, value) => {
        let newData = {...formData}
        newData[key] = value
        
        setData(newData)
    }

    const setType = (obj) => {
        if (obj.id === 1){
            let questions = [...formData.questions].map((item) => {
                return {...item, time:item.time}
            })
            setData({...formData, type: obj, questions: questions, time: ''})
        }
        else{
            setData({...formData, type: obj})
        }
    }
    const ComputeAllQuestionsTime = () => {
       return formData.questions.map(item=> item.time ? item.time : 0).reduce((a, b) => a + b, 0)
    }


    const setQuestions = (questions) => {
        let newData = {...formData, questions: questions}
        setData(newData)
    }


    return (
        <form className={css.block}>
            <FormHeader name={formData.name} type={formData.type} time={formData.time} st={setType} description={formData.description} set={setHeader} />
            <QuestionList timeInfo={{total: formData.time, has: ComputeAllQuestionsTime()}} questions={formData.questions} set={setQuestions} testType={formData.type} defaultValue={defaultQuestionValue}/>
            <FromFooter />
        </form>
    )
}

