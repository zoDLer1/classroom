import css from '../css/question.module.css'
import TextAnswer from 'components/forms/test-forms/components/answers/text-answer/passing'
import FewFromListAnswer from 'components/forms/test-forms/components/answers/few-from-list-answer/passing'
import OneFromListAnswer from 'components/forms/test-forms/components/answers/one-from-list-answer/passing'
import Image from 'components/forms/test-forms/components/image/view'
import Button from 'UI/Inputs/Button'
import { useTimer } from 'hooks/useTimer'






export default (props) =>  {

    const timeIsUp = () => {
        props.next()
        setAnswerTime(time)
        reset()
    }

    const onNext = (evt) =>{
        evt.preventDefault()
        setAnswerTime(time)
        props.next()
        
        reset()
        
        // console.log(time)
    }

   
        const { time, reset } = useTimer(props.data.time, timeIsUp, props.data.time)

    
    const setAnswer = (value) => {
        props.set(props.data.id, { ...props.data, answers: value })
    }

    const setAnswerTime = (value) => {
        props.set(props.data.id, { ...props.data, answer_time: value })
    }

    const elems = {
        1: { 
            elem: <TextAnswer questionId={props.data.id} set={setAnswer} value={props.data.answers} />
        },
        2: {
            elem: <OneFromListAnswer questionId={props.data.id} set={setAnswer} value={props.data.answers} />
        },
        3: {
            elem: <FewFromListAnswer questionId={props.data.id} set={setAnswer} value={props.data.answers} />
        }
    }


    

    


    let cols = 1
    if (props.data.photos.length > 1){
        cols = 2
    }
    if (props.data.photos.length > 4){
        cols = 3
    }

    return (

        <div className={css.block} style={{overflow: 'hidden'}}>
            { props.data.time? <>
            {`${Math.round(time/props.data.time *100)/100}% ${time+' - '+props.data.time}`}
            { props.data.time && <div style={{ width: `${Math.round(time/props.data.time *100)}%` }}   className={css.time_line}></div>}
            </> : ''}
            <div className={css.header}>
                <h2 className={css.label}>{props.data.name}</h2>
            </div>
            {props.data.photos.length 
            ? <div className={css.photos} style={{gridTemplateColumns: `repeat(${cols}, 1fr)`}}>
                {props.data.photos.map((item, index) => <Image key={index}  data={item} alt="..." />)}
            </div>: ''}

            <div className={css.body}>
                <div className={css.answer}>
                    {elems[props.data.type].elem}
                </div>
            </div>
            <div className={css.footer}>
    
                <Button text={'back'}  icon='fa-solid fa-arrow-left' style={ {backgroundColor:'rgb(240, 167, 32)'}}/>
                
                {props.total === props.current 
                ? <Button text={'finish'} onClick={(evt)=>{onNext(evt)}}  icon='fa-solid fa-flag-checkered' style={ {backgroundColor:'var(--success-color)'}}/> 
                : <Button text={'next'} onClick={onNext} icon='fa-solid fa-arrow-right' />}


                {/* { props.data.time &&
                    <>
                        <div className={css.time_view}>
                            <p>Time:</p>
                            <p >{props.data.time}</p>
                        </div>
                        <p className={css.time_view}>/</p>
                    </>   
                } */}
            
            
                {/* {props.data.required 
                ? <p className={[css.required, css.required_true].join(' ')}>Requeired</p>
                : <p className={css.required}>Not requeired</p>} */}
            </div>
        </div>
    )
}

