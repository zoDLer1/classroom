import css from '../css/footer.module.css'
import Button from 'UI/Inputs/Button'
import Link from 'components/UI/navigation/Link'
import { useEffect } from 'react'
import TestsServise from 'services/TestsService'
import user from 'store/user'

export default (props) => {


    useEffect(()=>{
        console.log(props.data)
        const questions = props.data.questions.map(q=>
            ({question: q.id, time: q.passed_time, passed_answers:q.answers.filter(n => n.isCorrect).map(a => ({answer: a.id, value: a.value}))})    
        )
        TestsServise.pass({member: `${user.member}`, test: props.id, passed_questions:questions})
    },[])

    return (
        <div className={css.passing}>
            <h2 className={css.label}>Тест пройден</h2>
            <div className={css.res}>
                <h4>Ваши результаты:</h4>
                <div className={css.results}>
                    <div className={css.result}>
                        <h4>Время</h4>
                        <p>10 сек</p>
     
                    </div> 
                    <div className={css.result}>
                        <h4>Ср время вопроса</h4>
                        <p>~10 сек</p>
                    </div> 
                    <div className={css.result}>
                        <h4>Результаты теста</h4>
                        <p>2/3</p>
                    </div> 
                    <div className={css.result}>
                        <h4>Правильность</h4>
                        <p>66%</p>
                    </div> 
                </div>
            </div>
            <div className={css.view_test}>
                <Link text='View test' />
            </div>
            
            <div className={css.btns}>
                {/* <Button onClick={props.addToClass} icon="fa-regular fa-file-lines" text='View test' /> */}
                <Button text={'Menu'}  icon='fa-solid fa-arrow-left' />
            </div>
            
            {/* <Button icon="fa-solid fa-pen-to-square" text='Edit' />
            <Button bg='#D61414' icon="fa-solid fa-trash" text='Delete' /> */}

        </div>
    )
}
