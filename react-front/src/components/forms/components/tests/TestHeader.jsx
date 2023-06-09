import css from './css/form-header.module.css'
import FormTextArea from 'components/forms/components/inputs/FormTextArea'
import { faPen, faArrowLeft, faPlay } from '@fortawesome/free-solid-svg-icons'
import FormInput from 'components/forms/components/inputs/FormInput'
import Button from 'components/UI/inputs/Button'
import { useNavigate } from "react-router-dom"


const TestHeader = ({ getInput, start, mode }) => {

    const navigate = useNavigate()
    const descriptionInput = getInput('description')
    const nameInput = getInput('name')

    const viewConditions = {
        creation: {
            name: <FormInput {...nameInput} placeholder="Test name" icon={faPen} />,
            description: <FormTextArea rows={'7'}  {...descriptionInput} placeholder={"Описание"} />
        },
        view: {
            name: <h2 className={css.label}>{nameInput.value}</h2>,
            description: <p className={css.description}>{descriptionInput.value}</p>
        },
        pass: {
            name: <h2 className={css.label}>{nameInput.value}</h2>,
            description: <p className={css.description}>{descriptionInput.value}</p>
        },

    }




    return (
        <div className={[css.block, css[mode]].join(' ')} >
            <div className={css.textarea}>
                {viewConditions[mode].name}

            </div>
            <div className={css.textarea}>
                {viewConditions[mode].description}
            </div>
            {mode === 'pass' && <div className={css.footer}>
                <div className={css.footer_btns}>
                    <Button text={'Назад'} size={2} icon={faArrowLeft} style={{ backgroundColor: 'rgb(240, 167, 32)' }} />
                    <Button text={'Старт'} size={2} onClick={start} icon={faPlay} />
                </div>
            </div>}

        </div>
    )
}

export default TestHeader