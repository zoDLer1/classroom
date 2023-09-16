import css from './css/few-from-list-answer.module.css'
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

    return <div className={css.item} >
        <FormFastCheckBox name={`${name}.${index}.isCorrect`} checkboxSlyle={getCheckBoxStyle()} disabled={viewMode && !passingMode}>
            {viewMode && <h3 className={css.label}>{data.name}</h3>}
        </FormFastCheckBox>
        {!viewMode &&
            <>
                <FormNestedFastInput name={`${name}.${index}.name`} icon={faPen} placeholder={`Введите ответ ${index + 1}`} />
                <div className={css.actions}>
                    <FontAwesomeIcon icon={faSquarePlus} onClick={add} className={[css.icon, css.add].join(' ')} size='lg'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faXmark} onClick={remove} className={[css.icon, css.remove].join(' ')} size='lg'></FontAwesomeIcon>
                </div>
            </>
        }
    </div>
}

const FewFromListAnswer = ({ data, name, viewMode, passingMode = false }) => {

    return <FieldArray name={name} render={({ insert, remove, form }) =>
        <div className={css.list}>
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