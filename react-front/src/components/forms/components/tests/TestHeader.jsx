import css from './css/form-header.module.css'
import { FormFastTextArea } from '../inputs/FormTextArea'
import { faPen, faArrowLeft, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FormFastInput } from '../inputs/FormInput'
import Button from 'components/UI/inputs/Button'
import classNames from 'classnames/bind'

const cx = classNames.bind(css)

const TestHeader = ({ getInput, start, mode }) => {


    const blockStyles = cx('block', { creation_mode: !mode })


    return (
        <div className={blockStyles} >
            <div className={css.textarea}>
                <FormFastInput readOnly={mode} name='name' placeholder="Название" icon={faPen} />
            </div>
            <div className={css.textarea}>
                <FormFastTextArea readOnly={mode} rows={'7'} name='description' placeholder={"Описание"} />
            </div>
            {/* {mode === 2 && <div className={css.footer}>
                <div className={css.footer_btns}>
                    <Button text={'Назад'} size={2} icon={faArrowLeft} style={{ backgroundColor: 'rgb(240, 167, 32)' }} />
                    <Button text={'Старт'} size={2} onClick={start} icon={faPlay} />
                </div>
            </div>} */}

        </div>
    )
}

export default TestHeader