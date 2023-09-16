import questionCss from './css/question.module.css'
import TextAnswerList from 'components/lists/TextAnswer'
import FewFromListAnswer from 'components/lists/FewFromListAnswer'
import OneFromListAnswer from 'components/lists/OneFromListAnswer'
import Image from 'components/lists/items/Image'
import SidebarMenu from '../../UI/modelWindows/SidebarMenu'
import { faPen, faListOl, faClock, faTrash, faCirclePlus, faEllipsisVertical, faImage, faFileAudio, faArrowRight, faCopy, faFont } from '@fortawesome/free-solid-svg-icons'
// import { FormFastInput, FormNestedFastInput } from '../../inputs/FormInput'
// import { FormNestedFastSelect, FormFastSelect } from '../../inputs/FormSelect'
import { FormNestedFastSelect } from 'components/forms/inputs/FormSelect'
import { FormNestedFastInput, FormFastInput } from 'components/forms/inputs/FormInput'
// import FormSwitch from '../../inputs/FormSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { defaultAnswersValues } from 'pages/CreateTemplatePage'


const Question = ({ form, data, remove, index, add, copy, viewMode }) => {

    const [viewTime, setViewTime] = useState(!!data.time)

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
                }
                else {
                    checked(false)
                    form.setFieldValue(`questions.${index}.time`, '')
                }

            },
            isChecked: viewTime
        },
        // { icon: faImage, useInput: { multiple: true, onChange: () => null, type: "file", accept: ".png, .jpg, .jpeg" } },
        // { icon: faFileAudio }
    ]



    const answers = {
        1: <TextAnswerList viewMode={viewMode}  data={data.answers} name={`questions.${index}.answers`} />,
        2: <OneFromListAnswer viewMode={viewMode} data={data.answers} name={`questions.${index}.answers`} form={form} />,
        3: <FewFromListAnswer viewMode={viewMode} data={data.answers} name={`questions.${index}.answers`} />
    }


    return (
        <div className={questionCss.block}>
            {}
            <div className={questionCss.header}>
                <FormNestedFastInput readOnly={viewMode} name={`questions.${index}.name`} placeholder="Название" icon={faPen} />
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
                        <FormNestedFastSelect readOnly={viewMode} onSelect={changeAnswerType} labelStyle={questionCss.type} name={`questions.${index}.type`} options={typeOptions} placeholder="Тип" icon={faListOl} />
                        {viewMode ?
                            data.time && <div className={questionCss.viewTime}>
                                <h5>Время:</h5>
                                {data.passed_time && <p>{data.passed_time}s /</p>}
                                <p>{data.time}s</p>
                            </div>
                            : (data.time || viewTime) && <div className={questionCss.time}>
                                
                                <FormNestedFastInput name={`questions.${index}.time`} placeholder="Время" icon={faClock} />
                            </div>}
                    </div>
                </div>
            </div>

            <div className={questionCss.footer}>
                {!viewMode &&
                    <>
                        <div className={questionCss.actions}>
                            <FontAwesomeIcon onClick={copy} icon={faCopy} className={[questionCss.icon, questionCss.action, questionCss.copy].join(' ')} />
                            <FontAwesomeIcon onClick={remove} icon={faTrash} className={[questionCss.icon, questionCss.action, questionCss.delete].join(' ')} />
                        </div>
                        <div className={questionCss.seporator}></div>
                        <FontAwesomeIcon icon={faEllipsisVertical} className={questionCss.icon} />
                    </>
                }
            </div>

            {!viewMode && <SidebarMenu id={index} className={questionCss.menu} items={menuItems} />}

        </div>
    )


}
export default Question

