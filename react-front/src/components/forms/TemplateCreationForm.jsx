import css from './css/test.module.css'
import FormHeader from 'components/forms/components/tests/TestHeader'
import QuestionList from 'components/forms/components/tests/QuestionList'
import FormFooter from 'components/forms/test-forms/components/footers/create'
import useForm from 'hooks/forms/useForm'
import useRequest from 'hooks/useRequest'
import TestsServise from 'services/TestsService'



const TemplateCreationForm = () => {


    const create = useRequest(
        TestsServise.createTemplate,
        {
            400: (response) => {
                // console.log()
                handleServerErrors(response.response.data)
            }
        }
    )

    const { errors, getInput, getModule, getSubmit, handleServerErrors } = useForm({
        name: {
            value: 'Lorem ipsum, dolor sit amet consect',
        },
        description: {
            value: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic officia explicabo nulla harum at, dolorem saepe nemo illo quod. Ullam aspernatur blanditiis, temporibus error consequuntur laborum nemo asperiores earum reiciendis?'
        },
        questions: {
            options: {
                isModule: true
            }
        }

    }, create)




    return (
        <div className={css.block}>
            <FormHeader getInput={getInput} />
            {JSON.stringify(errors)}
            <QuestionList getModule={getModule} />
            <button {...getSubmit()}>send</button>
            {/* <FormFooter submit={() => submit(formData)} /> */}

        </div>
    )
}

export default TemplateCreationForm