import css from './css/form-header.module.css'
import TextArea from 'components/UI/inputs/TextArea'
import FormTextArea from 'components/forms/components/inputs/FormTextArea'
import { faPen, faArrowLeft, faPlay } from '@fortawesome/free-solid-svg-icons'
import FormInput from 'components/forms/components/inputs/FormInput'
import { useState } from 'react'
import Button from 'components/UI/inputs/Button'


const TestHeader = ({ getInput, mode = 'creation' }) => {

    const [viewMode, setViewMode] = useState(mode)

    const SwitchMode = (evt) => {
        
        if (evt.key === 'c') {
            setViewMode('creation')
        }
        if (evt.key === 'v') {
            setViewMode('view')
        }
    }
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
        }
    }



    return (
        <div className={[css.block, css[viewMode]].join(' ')} onKeyDown={SwitchMode} tabIndex={0}>
            <div className={css.textarea}>
                {viewConditions[viewMode].name}

            </div>
            <div className={css.textarea}>
                {viewConditions[viewMode].description}
            </div>
            {viewMode === 'view' && <div className={css.footer}>
                {/* <Button text={'back'} icon={faArrowLeft} style={{ backgroundColor: 'rgb(240, 167, 32)' }} />
                <Button text={'start'} icon={faPlay} /> */}
            </div>}

        </div>
    )
}

export default TestHeader