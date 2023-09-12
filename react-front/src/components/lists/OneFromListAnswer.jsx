import css from './css/one-from-list-answer.module.css'
import { FormNestedFastInput } from 'components/forms/inputs/FormInput'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FieldArray } from 'formik'
import { defaultManyAnswer } from 'components/forms/TemplateCreationForm'
import { FormFastCheckBox } from 'components/forms/inputs/FormCheckBox'



const OneFromListAnswerItem = ({ viewMode, index, data, name, setOne, add, remove, passingMode }) => {

    const getCheckBoxStyle = () => {
        
        if (data.right !== undefined && viewMode && data.isCorrect){
            if (data.right && !data.isPassed){ 
                return 'disabled'
            }
            if (data.right){
                return 'correct'
            }
            if (!data.right){
                return 'error'
            }
        }
        if (viewMode && !passingMode) {
            return 'disabled'
        }

        return 'default'
    }


    return (
        <div className={css.item} > 
            <FormFastCheckBox
                type='circle'
                name={`${name}.${index}.isCorrect`}
                onCustomChange={setOne}
                disabled={viewMode && !passingMode}
                checkboxSlyle={getCheckBoxStyle()}
            >
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
    )
}

const OneFromListAnswer = ({ form, name, viewMode, data, passingMode = false }) => {


    const setOne = (index) => {
        for (let i = 0; i < data.length; i++) {
            form.setFieldValue(`${name}.${i}.isCorrect`, index === i)
        }
    }

    return <FieldArray validateOnChange={false} name={name} render={({ insert, remove, form }) =>
        <div className={css.list}>
            {
                data.map((answer, index) => <OneFromListAnswerItem
                    data={answer}
                    form={form}
                    passingMode={passingMode}
                    viewMode={viewMode}
                    name={name}
                    add={() => insert(index + 1, defaultManyAnswer)}
                    remove={() => remove(index)}
                    setOne={() => setOne(index)}
                    index={index}
                    key={index}
                />)
            }
        </div>
    }
    >
    </FieldArray>


}
export default OneFromListAnswer