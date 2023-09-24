import { FormNestedFastInput } from 'components/forms/inputs/FormInput'
import { faFont } from '@fortawesome/free-solid-svg-icons'
import { FieldArray } from 'formik'


const TextAnswer = ({ name, index, viewMode, passingMode, data }) => {

    const getStyte = () => {
        if (!data.isPassed) {
            return 'default'
        }
        else {
            return data.value === data.right ? 'correct' : 'error'
        }
    }


    return <div className='flex gap-6'>
        {((viewMode && !data.isPassed) && !passingMode || !!data.right) && <h4 className='text-sm font-semibold'>Ответ: <span className='text-lg italic font-normal'>{data.right ?? data.value}</span></h4>}
        {(!viewMode || data.isPassed) && <FormNestedFastInput
            disabled={!!data.isPassed}
            styleType={getStyte()}
            name={`${name}.${index}.value`}
            placeholder={data.isPassed ? "Ваш ответ" : "Введите ответ"}
            icon={faFont}
        />}
    </div>
}


const TextAnswerList = ({ data, name, viewMode, passingMode = false }) => {
    return <FieldArray name={name} >
        {() =>
            data.map((answer, index) => <TextAnswer
                data={answer}
                index={index}
                passingMode={passingMode}
                name={name}
                key={index}
                viewMode={viewMode}
            />)
        }
    </FieldArray>



}
export default TextAnswerList