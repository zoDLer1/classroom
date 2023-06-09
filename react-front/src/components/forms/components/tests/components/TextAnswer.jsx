import FormInput from 'components/forms/components/inputs/FormInput'
import useFormList from 'hooks/forms/useFormList'
import useFormModule from 'hooks/forms/useFormModue'
import { faFont } from '@fortawesome/free-solid-svg-icons'
import { REQUIRED__VALIDATOR } from 'validation/validators'
import Input from 'components/UI/inputs/Input'



const TextAnswer = ({ module, mode, correct_answers }) => {



    const { getListItem } = useFormList(module, 1, true)
    const { value, error, isSubmited, validationMethods } = getListItem(0)


    const { getInput } = useFormModule({
        id: {
            value: value.id || null,
            isOptional: true
        },
        value: {
            validators: mode !== 'pass' ? [REQUIRED__VALIDATOR()] : [],
            value: value.value || correct_answers.filter(answer => answer.id === value.id)[0]?.value || ''
        },
        isCorrect: {
            value: true
        }
    }, { validationMethods, isSubmited })


    const valueInput = getInput('value')


    const viewConditions = {
        creation: <FormInput {...valueInput} placeholder="Введите ответ" icon={faFont} />,
        view: <Input value={valueInput.value} readOnly placeholder="Введите ответ" icon={faFont} />,
        pass: <FormInput {...valueInput} placeholder="Введите ответ" icon={faFont} />,
       
    }


    return viewConditions[mode]
}
export default TextAnswer