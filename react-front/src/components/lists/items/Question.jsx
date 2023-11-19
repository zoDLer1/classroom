import TextAnswerList from 'components/lists/TextAnswer'
import FewFromListAnswer from 'components/lists/FewFromListAnswer'
import OneFromListAnswer from 'components/lists/OneFromListAnswer'
import Image from 'components/lists/items/Image'
import SidebarMenu from '../../UI/modelWindows/SidebarMenu'
import { faPen, faListOl, faClock, faTrash, faCirclePlus, faEllipsisVertical, faImage, faFileAudio, faArrowRight, faCopy, faFont } from '@fortawesome/free-solid-svg-icons'
import { FormNestedFastSelect } from 'components/forms/inputs/FormSelect'
import { FormNestedFastInput, FormFastInput } from 'components/forms/inputs/FormInput'
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
        <div className={'group flex-vertical gap-9 py-12 px-20 box rounded-xl relative min-h-[285px] w-[53rem]'}>
            <div>
                <FormNestedFastInput readOnly={viewMode} name={`questions.${index}.name`} placeholder="Название" icon={faPen} />
            </div>
            {/* {data.photos.length
                ? <div className={questionCss.photos} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                    {data.photos.map((item) => <Image onClose={removeImg} data={item} alt="..." />)}
                </div> : ''} */}

            <div className='flex justify-between flex-1'>
                <div className='flex justify-between w-full items-start'>
                    <div>
                        {answers[data.type]}
                    </div>

                    <div className='flex flex-col gap-5 w-80'>
                        <FormNestedFastSelect readOnly={viewMode} onSelect={changeAnswerType} name={`questions.${index}.type`} options={typeOptions} placeholder="Тип" icon={faListOl} />
                        {viewMode ?
                            data.time && <div className='flex-ic gap-1'>
                                <h5 className='font-semibold text-sm'>Время:</h5>
                                {data.passed_time && <p>{data.passed_time}s /</p>}
                                <p>{data.time}s</p>
                            </div>
                            : (data.time || viewTime) && <div className='w-80'>
                                <FormNestedFastInput name={`questions.${index}.time`} placeholder="Время" icon={faClock} />
                            </div>}
                    </div>
                </div>
            </div>

            <div className='border-t-2 border-gray-450 pt-4 flex-ic-je gap-5'>
                {!viewMode &&
                    <>
                        <div className='flex gap-5'>
                            <FontAwesomeIcon onClick={copy} icon={faCopy} className='text-gray-450 text-1.5xl cursor-pointer hover:text-status-correct' />
                            <FontAwesomeIcon onClick={remove} icon={faTrash} className='text-gray-450 text-1.5xl cursor-pointer hover:text-status-error' />
                        </div>
                        <div className={'w-0.5 h-6 bg-gray-450'}></div>
                        <FontAwesomeIcon icon={faEllipsisVertical} className='text-gray-450 text-1.5xl' />
                    </>
                }
            </div>

            {!viewMode && <SidebarMenu id={index} className={'flex justify-center opacity-0 absolute p-8 top-1/2 -translate-y-1/2 -right-32 hover:!opacity-100 group-hover:opacity-50'} items={menuItems} />}

        </div>
    )


}
export default Question

