import css from './test-edit.module.css'
import useTestCreation from 'hooks/useTestCreation'
import TestCreationForm from 'components/forms/test-forms/test-creation-form'
import TestsServise from 'services/TestsService'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'


const EditTest = () =>  {
    const { id } = useParams()
    const Submit = async (formData) =>{
        
    

    }
    const defaultQuestionValue = {name: '', type: 1, time: '',  answers: [{name: '', value: '', isCorrect: true}], required: false, photos:[]}
    const [data] = useState({
        header:{
            name: '', 
            description: '', 
            time: '', 
            type: {
                name: 'Simple', 
                id: 1
            }
        }, 
        questions: []
    })
    const hook = useTestCreation(data, defaultQuestionValue)
    useEffect(()=>{
        const fetchTest = async () =>{
            const set = hook[1]
            const response = await TestsServise.get(id)
            const {questions, ...header} = response.data
            set({questions: questions.map(item =>({...item, photos:[]})), header:{...header, type: {name: 'Simple', id: 1}}})
        }
        fetchTest()
    }, [])
    

    return (
        <div className={css.block}>
            
           <TestCreationForm hook={hook} defaultQuestionValue={defaultQuestionValue} submit={Submit} />
        </div>
    )
}

export default EditTest