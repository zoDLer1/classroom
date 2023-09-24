import { FormNestedFastInput } from 'components/forms/inputs/FormInput'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FieldArray } from 'formik'
import { defaultManyAnswer } from 'pages/CreateTemplatePage'
import { FormFastCheckBox } from 'components/forms/inputs/FormCheckBox'


const FewFromListAnswerItem = ({ name, add, remove, index, viewMode, data, passingMode }) => {

    const getCheckBoxStyle = () => {
        if (data.right !== undefined && viewMode && data.isCorrect) {
            if (data.right && !data.isPassed) {
                return 'disabled'
            }
            if (data.right) {
                return 'correct'
            }
            if (!data.right) {
                return 'error'
            }
        }
        if (viewMode && !passingMode) {
            return 'disabled'
        }

        return 'default'
    }

    return <div className='group/answer flex-ic gap-2.5' >
        <FormFastCheckBox name={`${name}.${index}.isCorrect`} checkboxSlyle={getCheckBoxStyle()} disabled={viewMode && !passingMode}>
            {viewMode && <h3 className='text-1.5lg w-72 overflow-hidden text-ellipsis'>{data.name}</h3>}
        </FormFastCheckBox>
        {!viewMode &&
            <>
                <FormNestedFastInput name={`${name}.${index}.name`} icon={faPen} placeholder={`Введите ответ ${index + 1}`} />
                <div className='flex-col hidden items-center gap-1 group-hover/answer:flex'>
                    <FontAwesomeIcon icon={faSquarePlus} onClick={add} className='cursor-pointer text-xl text-gray-450 hover:text-status-correct'  size='lg'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faXmark} onClick={remove} className='cursor-pointer text-xl text-gray-450 hover:text-status-error' size='lg'></FontAwesomeIcon>
                </div>
            </>
        }
    </div>
}

const FewFromListAnswer = ({ data, name, viewMode, passingMode = false }) => {

    return <FieldArray name={name} render={({ insert, remove, form }) =>
        <div className='flex-vertical gap-5'>
            {
                data.map((answer, index) => <FewFromListAnswerItem
                    add={() => insert(index + 1, defaultManyAnswer)}
                    remove={() => remove(index)}
                    passingMode={passingMode}
                    data={answer}
                    viewMode={viewMode}
                    form={form}
                    name={name}
                    index={index}
                    key={index}
                />)
            }
        </div>
    }
    >
    </FieldArray>
}
export default FewFromListAnswer 