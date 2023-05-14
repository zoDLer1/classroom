import FormInput from 'components/forms/components/inputs/FormInput'
import useFormList from 'hooks/forms/useFormList'
import useFormModule from 'hooks/forms/useFormModue'
import { faFont } from '@fortawesome/free-solid-svg-icons'
import { REQUIRED__VALIDATOR } from 'validation/validators'

const TextAnswer = ({ getModule }) => {
    const { getListItem } = useFormList(1, getModule('answers'))

    const { options } = getListItem(0)


    const { getInput } = useFormModule({
        value: {
            validators: [REQUIRED__VALIDATOR()]
        },
        isCorrect: {
            value: true
        }
    }, options)

    return (

        <FormInput {...getInput('value')} placeholder="Text answer" icon={faFont} />


    )
}
export default TextAnswer