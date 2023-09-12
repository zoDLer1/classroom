import css from './css/form-header.module.css'
import { FormFastTextArea } from 'components/forms/inputs/FormTextArea'
import { faPen, faArrowLeft, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FormFastInput } from 'components/forms/inputs/FormInput'
import classNames from 'classnames/bind'

const cx = classNames.bind(css)

const TestHeader = ({ viewMode, children }) => {


    const blockStyles = cx('block', { creation_mode: !viewMode, viewMode })


    return (
        <div className={blockStyles} >
            <div className={css.textarea}>
                <FormFastInput readOnly={viewMode} name='name' placeholder="Название" icon={faPen} />
            </div>
            <div className={css.textarea}>
                <FormFastTextArea readOnly={viewMode} rows={'7'} name='description' placeholder={"Описание"} />
            </div>
            {children}
        </div>
    )
}

export default TestHeader