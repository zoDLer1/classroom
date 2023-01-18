import questionCss from 'components/forms/test-forms/components/questions/css/question.module.css'
import Input from 'UI/Input'
import Select from 'UI/Select'
import TextAnswer from 'components/forms/test-forms/components/answers/text-answer/create'
import FewFromListAnswer from 'components/forms/test-forms/components/answers/few-from-list-answer/create'
import OneFromListAnswer from 'components/forms/test-forms/components/answers/one-from-list-answer/create'
import Switch from 'UI/Switch'
import Image from 'components/forms/test-forms/components/image/create'


export default (props) => {

    const types = [
        { name: 'Text', id: 1 },
        { name: "One from list", id: 2 },
        { name: "Few from list", id: 3 }
    ]



    const addImg = (evt) => {
        props.set(props.numb, { ...props.data, photos: [...props.data.photos , ...Array.from(evt.target.files).map(item => {
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
        props.set(props.numb, { ...props.data, photos: props.data.photos.filter((item) => item !== itm)})
    }

    const computeTime = (time, offset) => {
        let maxTime = props.timeInfo.total - props.timeInfo.has + offset
    
        if (props.timeInfo.total){
            if (time >= maxTime){
                time = maxTime
            }
        }
        return time
    }


    const setTime = (value) =>{
        let time = Number(value)
        props.set(props.numb, { ...props.data, time:  computeTime(time, props.data.time)})
    }

    const setRequired = (value) => {
        props.set(props.numb, { ...props.data, required: value })
    }
    const setQuestionType = (type) => {
        props.set(props.numb, { ...props.data, answer_type: type, answer: elems[type.id].DefaultValue })
      

    }
    const setAnswer = (value) => {
        props.set(props.numb, { ...props.data, answer: value })
    }
    const elems = {
        1: { elem: <TextAnswer numb={props.numb} value={props.data.answer} set={setAnswer} />, DefaultValue: '' },
        2: {
            elem: <OneFromListAnswer numb={props.numb} value={props.data.answer} set={setAnswer} />, DefaultValue: [
                { value: '', correct: false },
                { value: '', correct: true },
                { value: '', correct: false }
            ]
        },
        3: {
            elem: <FewFromListAnswer numb={props.numb} value={props.data.answer} set={setAnswer} />, DefaultValue: [
                { value: '', correct: true },
                { value: '', correct: false },
                { value: '', correct: false }
            ]
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
        <div className={questionCss.block}>     
            <div className={questionCss.header}>
                <Input value={props.data.name} name={`question_${props.numb}_name`} onChange={(evt) => props.set(props.numb, { ...props.data, name: evt.target.value })} placeholder="Question name" icon='fa-solid fa-pen' />
                <Select value={props.data.answer_type.name} select={setQuestionType} options={types} name={`question_${props.numb}_type`} placeholder="Answer type" icon='fa-solid fa-list-ol' />
            </div>

            {props.data.photos.length 
                ? <div className={questionCss.photos} style={{gridTemplateColumns: `repeat(${cols}, 1fr)`}}>
                    {props.data.photos.map((item) => <Image onClose={removeImg} data={item} alt="..." />)}
                </div>: ''}

            <div className={questionCss.body}>
                <div className={questionCss.answer}>
                    {elems[props.data.answer_type.id].elem}
                </div>
                
                {props.testType.id === 2 && <div className={questionCss.time}>
                    <Input value={props.data.time} onChange={(evt) => setTime(evt.target.value)} type="number" name={`question_${props.numb}_time`} placeholder="Time" icon='fa-regular fa-clock' />
                </div>}


            </div>
            <div className={questionCss.footer}>
                <div className={questionCss.actions}>
                    <i onClick={()=>props.delete(props.numb)} className={`${[questionCss.icon, questionCss.action, questionCss.delete].join(' ')} fa-solid fa-trash`}></i>
                    <i onClick={()=>props.copy(props.numb, {...props.data, time: computeTime(props.data.time, 0)})} className={`${[questionCss.icon, questionCss.action, questionCss.copy].join(' ')} fa-regular fa-copy`}></i>
                </div>
                <div className={questionCss.seporator}></div>
                <Switch checked={props.data.required} onChange={(evt) => setRequired(evt.target.checked)} name={`question_${props.numb}_required`} text='Required' />
                <i className={`${questionCss.icon} fa-solid fa-ellipsis-vertical`}></i>
            </div>

            <div className={questionCss.menu}>
                <div className={questionCss.menu_body}>
                    <div>
                        <i onClick={() => props.create(props.numb, props.data)} className={`${questionCss.item} ${questionCss.fs24} fa-solid fa-circle-plus`}></i>
                    </div>
                    <div>
                        <input multiple onChange={addImg} type="file" id={`question_${props.numb}_img-upload`} accept=".png, .jpg, .jpeg" hidden />
                        <label htmlFor={`question_${props.numb}_img-upload`}>
                            <i className={`${questionCss.item} ${questionCss.fs24} fa-solid fa-image`}></i>
                        </label>
                    </div>
                    <div>
                        <i className={`${questionCss.item} ${questionCss.fs28} fa-solid fa-file-audio`}></i>
                    </div>
                    <div>
                        <i className={`${questionCss.item} ${questionCss.fs28} fa-solid fa-file-video`}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
