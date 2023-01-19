import css from '../css/test.module.css'
import FormHeader from 'components/forms/test-forms/components/headers/create'
import QuestionList from 'components/forms/test-forms/components/question-lists/create'
import FromFooter from 'components/forms/test-forms/components/footers/create'
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
    const Submit = (evt) =>{
        evt.preventDefault()
        
        console.log(JSON.stringify(formData))
    }


    return (
        <form onSubmit={Submit} className={css.block}>
            
            <FormHeader name={formData.name} type={formData.type} time={formData.time} st={setType} description={formData.description} set={setHeader} />
            <QuestionList timeInfo={{total: formData.time, has: ComputeAllQuestionsTime()}} questions={formData.questions} set={setQuestions} testType={formData.type} defaultValue={defaultQuestionValue}/>
            <FromFooter submit={Submit}/>
            
        </form>
    )
}

