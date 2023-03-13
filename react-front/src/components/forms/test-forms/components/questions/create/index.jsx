import questionCss from 'components/forms/test-forms/components/questions/css/question.module.css'
import Input from 'UI/Inputs/Input'
import Select from 'UI/Inputs/Select'
import TextAnswer from 'components/forms/test-forms/components/answers/text-answer/create'
import FewFromListAnswer from 'components/forms/test-forms/components/answers/few-from-list-answer/create'
import OneFromListAnswer from 'components/forms/test-forms/components/answers/one-from-list-answer/create'
import Switch from 'UI/Inputs/Switch'
import Image from 'components/forms/test-forms/components/image/create'
import QuestionMenu from '../../question-menu'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'



const CreateQuestion = ({ set, remove, create, copy, index, data }) => {

    const [useTime, setUseTime] = useState(false)

    const types = [
        { name: 'Text', id: 1 },
        { name: "One from list", id: 2 },
        { name: "Few from list", id: 3 }
    ]

    const addImg = (evt) => {
        set({ ...data, photos: [...data.photos , ...Array.from(evt.target.files).map(item => {
                return {
                    url: URL.createObjectURL(item),
                    info: {
                        name: item.name,
                        size: item.size,
                        type: item.type
                    } 
                }
            })
        ]})
    }
    const removeImg = (itm) => {
        set({ ...data, photos: data.photos.filter((item) => item !== itm)})
    }

    const setTime = (time) =>{
        set({ ...data, time: Number(time) })
    }
    
    const setRequired = (value) => {
        set({ ...data, required: value })
    }
    const setQuestionType = (type) => {
        console.log(elems[type.id])
        set({ ...data, type: type.id, answers: elems[type.id].DefaultValue })
    }
    const setAnswer = (value) => {
        set({ ...data, answers: value })
    }
    // console.log(data.answers)
    const elems = {
        1: { elem: <TextAnswer questionIndex={index} value={data.answers} set={setAnswer} />, DefaultValue: [{value: '', isCorrect: true}] },
        2: {
            elem: <OneFromListAnswer questionIndex={index} value={data.answers} set={setAnswer} />, DefaultValue: [
                { name: '', isCorrect: false },
                { name: '', isCorrect: true },
                { name: '', isCorrect: false }
            ]
        },
        3: {
            elem: <FewFromListAnswer questionIndex={index} value={data.answers} set={setAnswer} />, DefaultValue: [
                { name: '', isCorrect: true },
                { name: '', isCorrect: false },
                { name: '', isCorrect: false }
            ]
        }
    }

    let cols = 1
    if (data.photos.length > 1){
        cols = 2
    }
    if (data.photos.length > 4){
        cols = 3
    }

    return (
        
        <div className={questionCss.block}>   
            
            <div className={questionCss.header}>
                <Input value={data.name} name={`question_${index}_name`} onChange={(evt) => set({ ...data, name: evt.target.value })} placeholder="Question name" icon={<FontAwesomeIcon icon={solid('pen')} size='sm'/>} />
            </div>

            {data.photos.length 
                ? <div className={questionCss.photos} style={{gridTemplateColumns: `repeat(${cols}, 1fr)`}}>
                    {data.photos.map((item) => <Image onClose={removeImg} data={item} alt="..." />)}
                </div>: ''}

            <div className={questionCss.body}>
                <div className={questionCss.answer}>
                    {elems[data.type].elem}
                    <div className={questionCss.answer_options}>
                        <Select value={types[data.type-1].name} select={setQuestionType} options={types} name={`question_${index}_type`} placeholder="Answer type"  icon={<FontAwesomeIcon icon={solid('list-ol')} size='sm'/>}  />
                        {useTime &&
                        <div className={questionCss.time}>
                            <Input reg={/^[0-9]{0,2}$/i} value={data.time} onChange={(evt) => setTime(evt.target.value)} name={`question_${index}_time`} placeholder="Time" icon={<FontAwesomeIcon icon={solid('clock')} size='sm'/>} />
                        </div>}
                    </div>
                    
                </div>
                
                

            </div>
            <div className={questionCss.footer}>
                <div className={questionCss.actions}>
                    <i onClick={()=>remove()} className={`${[questionCss.icon, questionCss.action, questionCss.delete].join(' ')} fa-solid fa-trash`}></i>
                    <i onClick={()=>copy(data)} className={`${[questionCss.icon, questionCss.action, questionCss.copy].join(' ')} fa-regular fa-copy`}></i>
                </div>
                <div className={questionCss.seporator}></div>
                <Switch checked={data.required} onChange={(evt) => setRequired(evt.target.checked)} name={`question_${index}_required`} text='Required' />
                <i className={`${questionCss.icon} fa-solid fa-ellipsis-vertical`}></i>
            </div>
            <QuestionMenu id={index} className={questionCss.menu} items={[
                {icon: 'fa-solid fa-circle-plus', action: () => create()},
                {icon: 'fa-solid fa-clock', action: () =>{ useTime ? setUseTime(false) : setUseTime(true); setTime('')} , isChecked: useTime},
                {icon: 'fa-solid fa-image', useInput:{multiple: true, onChange: addImg, type: "file", accept:".png, .jpg, .jpeg"}},
                {icon: 'fa-solid fa-file-audio'}
            ]}/>
        </div>
    )
}
export default CreateQuestion