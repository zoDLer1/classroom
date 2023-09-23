import { FormFastTextArea } from 'components/forms/inputs/FormTextArea'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FormFastInput } from 'components/forms/inputs/FormInput'
import cx from 'classnames'



const TestHeader = ({ viewMode, children }) => {

    return (
        <div className={cx('bg-white shadow-70_20 rounded-[55px] py-11 px-20 flex flex-col gap-10 w-[53rem]', { '!gap-5': viewMode })} >
            <div className='col-span-full'>
                <FormFastInput readOnly={viewMode} name='name' placeholder="Название" icon={faPen} />
            </div>
            <div className='col-span-full'>
                <FormFastTextArea readOnly={viewMode} rows={'7'} name='description' placeholder={"Описание"} />
            </div>
            {children}
        </div>
    )
}

export default TestHeader