import questionCss from './css/question.module.css'
import TextAnswer from 'components/forms/components/tests/components/TextAnswer'
import FewFromListAnswer from 'components/forms/components/tests/components/FewFromListAnswer'
import OneFromListAnswer from 'components/forms/components/tests/components/OneFromListAnswer'
import Image from 'components/forms/test-forms/components/image/create'
import QuestionMenu from '../../../test-forms/components/question-menu'
import { faPen, faListOl, faClock, faTrash, faCopy, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import useFormModule from 'hooks/forms/useFormModue'
import FormInput from 'components/forms/components/inputs/FormInput'
import FormSelect from 'components/forms/components/inputs/FormSelect'
import FormSwitch from '../../inputs/FormSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { REQUIRED__VALIDATOR } from 'validation/validators'
import { IS_NUMBER_BETBEEN, IS_NUMBER__ROOL } from 'validation/rools'

const Question = ({ options, index }) => {

    const { getInput, getModule, InputCondition, setInputValue } = useFormModule({
        name: {
            validators: [REQUIRED__VALIDATOR()]
        },
        type: {
            value: 1,
            options: {
                selectOptions: [
                    { name: 'Text', id: 1 },
                    { name: "One from list", id: 2 },
                    { name: "Few from list", id: 3 }
                ]
            },
        },
        time: {
            hidden: true,
            value: '',
            rools: [IS_NUMBER__ROOL()]
        },
        answers: {},
        required: {
            value: false
        }

    }, options)

    

    const timeInput = getInput('time')




    const elems = {
        1: <TextAnswer getModule={getModule} />,
        2: <OneFromListAnswer getModule={getModule} />,
        3: <FewFromListAnswer getModule={getModule} />
    }
    
    // let cols = 1
    // if (data.photos.length > 1) {
    //     cols = 2
    // }
    // if (data.photos.length > 4) {
    //     cols = 3
    // }

    return (

        <div className={questionCss.block}>
            <div className={questionCss.header}>
                <FormInput {...getInput('name')} placeholder="Question name" icon={faPen} />
            </div>

            {/* {data.photos.length
                ? <div className={questionCss.photos} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                    {data.photos.map((item) => <Image onClose={removeImg} data={item} alt="..." />)}
                </div> : ''} */}

            <div className={questionCss.body}>
                <div className={questionCss.answer}>
                    {elems[getInput('type').value]}
                    <div className={questionCss.answer_options}>
                        <FormSelect {...getInput('type')} placeholder="Answer type" icon={faListOl} />
                        {!timeInput.hidden &&
                            <div className={questionCss.time}>
                                <FormInput {...timeInput} placeholder="Time" icon={faClock} />
                            </div>}
                    </div>

                </div>


                {/* reg={/^[0-9]{0,2}$/i} */}
            </div>
            <div className={questionCss.footer}>
                <div className={questionCss.actions}>
                    <FontAwesomeIcon icon={faTrash} className={[questionCss.icon, questionCss.action, questionCss.delete].join(' ')} />
                    <FontAwesomeIcon icon={faCopy} className={[questionCss.icon, questionCss.action, questionCss.copy].join(' ')} />
                </div>
                <div className={questionCss.seporator}></div>
                <FormSwitch {...getInput('required')} text='Required' />
                <FontAwesomeIcon icon={faEllipsisVertical} className={questionCss.icon} />
            </div>
            <QuestionMenu id={index} className={questionCss.menu} items={[
                { icon: 'fa-solid fa-circle-plus', action: () => 0 },
                {
                    icon: 'fa-solid fa-clock', action: () => {
                        InputCondition('time', !timeInput.hidden)
                        if (timeInput.hidden){
                            setInputValue('required', false)
                        }
                        
                        
                    },
                    isChecked: !timeInput.hidden
                },
                { icon: 'fa-solid fa-image', useInput: { multiple: true, onChange: () => null, type: "file", accept: ".png, .jpg, .jpeg" } },
                { icon: 'fa-solid fa-file-audio' }
            ]} />
        </div>
    )
}
export default Question