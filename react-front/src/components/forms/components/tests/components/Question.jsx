import questionCss from './css/question.module.css'
import TextAnswer from 'components/forms/components/tests/components/TextAnswer'
import FewFromListAnswer from 'components/forms/components/tests/components/FewFromListAnswer'
import OneFromListAnswer from 'components/forms/components/tests/components/OneFromListAnswer'
import Image from 'components/forms/test-forms/components/image/create'
import QuestionMenu from './QuestionMenu'
import { faPen, faListOl, faClock, faTrash, faCirclePlus, faEllipsisVertical, faImage, faFileAudio, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import useFormModule from 'hooks/forms/useFormModue'
import FormInput from 'components/forms/components/inputs/FormInput'
import FormSelect from 'components/forms/components/inputs/FormSelect'
import FormSwitch from '../../inputs/FormSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { REQUIRED__VALIDATOR } from 'validation/validators'
import { useTimer } from 'hooks/useTimer'
import { useEffect, useState } from 'react'
import Button from 'components/UI/inputs/Button'


const Question = ({ value, isLast, mode, hide, isNotRemove, onNext, error, isSubmited, validationMethods, remove, index, add }) => {




    const { getInput, getModule, InputCondition, setInputValue } = useFormModule({
        id: {
            value: value.id || undefined,
            isOptional: true
        },
        is_correct: {
            value: value.is_correct,
            readOnly: true
        },
        passed_answers: {
            value: value.passed_answers || [],
            readOnly: true
        },
        name: {
            value: value.name || '',
            validators: [REQUIRED__VALIDATOR()]
        },
        required: {
            value: value.required || false
        },
        time: {
            hidden: mode !== 'pass',
            value: '' || value.time
        },
        type: {
            value: value.type || 1,
            options: {
                selectOptions: [
                    {
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
                    }
                ]
            }
        },
        answers: {
            value: value.answers || [{}]
        },
        correct_answers: {
            value: value.correct_answers || [],
            readOnly: true
        }

    }, { validationMethods, isSubmited })


    const next = () => {
        stop()
        setInputValue('time', time ? time : null)
        onNext()
    }

    const requiredInput = getInput('required')
    const timeInput = getInput('time')
    const typeInput = getInput('type')
    const passed_answers = getInput('passed_answers')
    const correct_answers = getInput('correct_answers')
    const InputName = getInput('name')
    const answersModule = getModule('answers')
    const is_correct = getInput('is_correct')
    const { time, start, stop } = useTimer(timeInput.value, next)

    const [answered, setAnswered] = useState(false)

    useEffect(() => {
        if (mode === 'pass' && !hide) {
            start()
        }
    }, [hide])

    useEffect(() => {
        if (mode === 'pass') {
            if (requiredInput.value) {
                if (typeInput.value !== 1) {
                    for (const answer of answersModule.values) {
                        if (answer.isCorrect) {
                            setAnswered(true)
                            return
                        }
                    }
                    setAnswered(false)
                }
                else {
                    setAnswered(Boolean(answersModule.values[0].value))
                }
            }
            else {
                setAnswered(true)
            }
        }

    }, [answersModule.values])

    const viewConditions = {
        creation: {
            name: <FormInput {...InputName} placeholder="Название" icon={faPen} />,
            type: <FormSelect {...typeInput} placeholder="Тип" icon={faListOl} />,
            footer: <div className={questionCss.footer}>
                {isLast && isNotRemove &&
                    <>
                        <div className={questionCss.actions}>
                            <FontAwesomeIcon onClick={remove} icon={faTrash} className={[questionCss.icon, questionCss.action, questionCss.delete].join(' ')} />
                        </div>
                        <div className={questionCss.seporator}></div>
                    </>
                }
                <FormSwitch {...requiredInput} text='Обязательный' />
                <FontAwesomeIcon icon={faEllipsisVertical} className={questionCss.icon} />
            </div>,
            time: <div className={questionCss.time}>
                <FormInput {...timeInput} placeholder="Время" icon={faClock} />
            </div>

        },
        view: {
            name: <h2 className={questionCss.label}>{InputName.value}</h2>,
            type: null,
            time: null,
            footer: <div className={questionCss.footer}>
                <div className={questionCss.btns}></div>

            </div>
        },
        pass: {
            name: <h2 className={questionCss.label}>{InputName.value}</h2>,
            footer: <div className={questionCss.footer}>
                <div className={questionCss.btns}>
                    <Button size={2} disabled={!answered} onClick={next} icon={faArrowRight}></Button>
                </div>
            </div>
        }
    }


    const menuItems = [

        {
            icon: faClock,
            action: (checked) => {
                InputCondition('time', !timeInput.hidden)
                if (timeInput.hidden) {
                    checked(true)
                    setInputValue('required', false)
                }
                else {
                    checked(false)
                }

            },
            isChecked: false
        },
        { icon: faImage, useInput: { multiple: true, onChange: () => null, type: "file", accept: ".png, .jpg, .jpeg" } },
        { icon: faFileAudio }
    ]
    if (isLast) {
        menuItems.unshift({ icon: faCirclePlus, action: add })
    }


    const answers = {
        1: <TextAnswer mode={mode} passed_answers={passed_answers} correct_answers={correct_answers.value} module={getModule('answers')} />,
        2: <OneFromListAnswer passed_answers={passed_answers.value} correct_answers={correct_answers.value} mode={mode} module={getModule('answers')} />,
        3: <FewFromListAnswer passed_answers={passed_answers.value} correct_answers={correct_answers.value} mode={mode} module={getModule('answers')} />
    }


    if (!hide) {
        return (
            <div className={[questionCss.block, questionCss[`mode-${mode}`], questionCss[`isCorrect-${is_correct.value}`]].join(' ')}>
                <div className={questionCss.time_line} style={{ width: time / timeInput.value * 100 + '%' }}></div>
                <div className={questionCss.header}>
                    {viewConditions[mode].name}
                </div>
                {/* {data.photos.length
                ? <div className={questionCss.photos} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                    {data.photos.map((item) => <Image onClose={removeImg} data={item} alt="..." />)}
                </div> : ''} */}

                <div className={questionCss.body}>
                    <div className={questionCss.answer}>
                        {answers[value.type]}
                        <div className={questionCss.answer_options}>
                            {viewConditions[mode].type}
                            {!timeInput.hidden && viewConditions[mode].time}
                        </div>
                    </div>
                </div>
                {viewConditions[mode].footer}

                {mode === 'creation' ? <QuestionMenu id={index} className={questionCss.menu} items={menuItems} /> : ''}

            </div>
        )
    }

}
export default Question

