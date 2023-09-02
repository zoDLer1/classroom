import questionCss from './css/question.module.css'
import TextAnswerList from 'components/forms/components/tests/components/TextAnswer'
import FewFromListAnswer from 'components/forms/components/tests/components/FewFromListAnswer'
import OneFromListAnswer from 'components/forms/components/tests/components/OneFromListAnswer'
import Image from 'components/forms/test-forms/components/image/create'
import QuestionMenu from './QuestionMenu'
import { faPen, faListOl, faClock, faTrash, faCirclePlus, faEllipsisVertical, faImage, faFileAudio, faArrowRight, faCopy, faFont } from '@fortawesome/free-solid-svg-icons'
import { FormFastInput, FormNestedFastInput } from '../../inputs/FormInput'
import { FormNestedFastSelect, FormFastSelect } from '../../inputs/FormSelect'
import FormSwitch from '../../inputs/FormSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  useState } from 'react'
import { defaultAnswersValues } from 'components/forms/TemplateCreationForm'




const Question = ({ form, data, remove, index, add, copy }) => {

    const [viewTime, setViewTime] = useState(false)

    const typeOptions = [{
        id: 1,
        name: 'Текстовое поле'
    },
    {
        id: 2,
        name: 'Один из списка'
    },
    {
        id: 3,
        name: 'Несколько из списка'
    }]


    const changeAnswerType = (_, type) => {
        form.setFieldValue(`questions.${index}.answers`, defaultAnswersValues[type])
    }



    const menuItems = [
        { icon: faCirclePlus, action: () => add() },
        {
            icon: faClock,
            action: (checked) => {
                setViewTime(!viewTime)
                if (!viewTime) {
                    checked(true)
                    form.setFieldValue(`questions.${index}.time`, '')
                }
                else {
                    checked(false)
                }

            },
            isChecked: false
        },
        // { icon: faImage, useInput: { multiple: true, onChange: () => null, type: "file", accept: ".png, .jpg, .jpeg" } },
        // { icon: faFileAudio }
    ]



    const answers = {
        1: <TextAnswerList data={data.answers} question={index} />,
        2: <OneFromListAnswer data={data.answers} question={index} form={form} />,
        3: <FewFromListAnswer data={data.answers} question={index} />
    }


    return (
        <div className={[questionCss.block, questionCss[`isCorrect-${false}`]].join(' ')}>
            {/* <div className={questionCss.time_line} style={{ width: time / timeInput.value * 100 + '%' }}></div> */}
            <div className={questionCss.header}>
                <FormNestedFastInput name={`questions.${index}.name`} placeholder="Название" icon={faPen} />
            </div>
            {/* {data.photos.length
                ? <div className={questionCss.photos} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                    {data.photos.map((item) => <Image onClose={removeImg} data={item} alt="..." />)}
                </div> : ''} */}

            <div className={questionCss.body}>
                <div className={questionCss.answer}>
                    <div className={questionCss.answer_item}>
                        {answers[data.type]}
                    </div>

                    <div className={questionCss.answer_options}>
                        <FormNestedFastSelect onSelect={changeAnswerType} labelStyle={questionCss.type} name={`questions.${index}.type`} options={typeOptions} placeholder="Тип" icon={faListOl} />
                        {/* <div className={questionCss.type_block}>
                            <p>Тип:</p>

                            <FontAwesomeIcon color='var(--primary-color)' icon={icons[data.type]} />
                        </div> */}


                        {viewTime && <div className={questionCss.time}>
                            <FormNestedFastInput name={`questions.${index}.time`} placeholder="Время" icon={faClock} />
                        </div>}
                    </div>
                </div>
            </div>
            <div className={questionCss.footer}>
                <div className={questionCss.actions}>
                    <FontAwesomeIcon onClick={copy} icon={faCopy} className={[questionCss.icon, questionCss.action, questionCss.copy].join(' ')} />
                    <FontAwesomeIcon onClick={remove} icon={faTrash} className={[questionCss.icon, questionCss.action, questionCss.delete].join(' ')} />
                </div>
                <div className={questionCss.seporator}></div>

                {/* <FormSwitch name='' text='Обязательный' /> */}
                <FontAwesomeIcon icon={faEllipsisVertical} className={questionCss.icon} />
            </div>

            <QuestionMenu id={index} className={questionCss.menu} items={menuItems} />

        </div>
    )


}
export default Question

