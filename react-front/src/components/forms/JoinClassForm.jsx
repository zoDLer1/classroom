import FormInput from './inputs/FormInput'
import Action from 'components/UI/inputs/Action'
import { faUsers, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import useRequest from 'hooks/requests/useRequest'
import ClassServise from 'services/ClassSevrice'
import { useInfoAndRedirect } from "hooks/globalUI/useInfoAndRedirect"
import { Formik, Form } from 'formik'

function JoinClassForm({ close }) {

    const redirect = useInfoAndRedirect(false)

    const redirectAndClose = (info) => {
        redirect(info)
        close()
    }

    const [JoinRequest] = useRequest(
        ClassServise.join,
        {
            200: (response) => redirectAndClose(response.data.detail),
            403: (response) => redirectAndClose(response.response.data.detail),
            404: () => redirectAndClose('Класс не найден'),
            400: (response) => redirectAndClose(response.response.data.detail),
        }
    )




    return (
        <Formik
            initialValues={{
                code: ''
            }}
            onSubmit={async ({ code }, { setSubmitting }) => {
                await JoinRequest(code)
                setSubmitting(false)
            }}
        >
            {({ handleSubmit }) => <Form onClick={evt => evt.stopPropagation()} className='flex items-center justify-center flex-col py-10 px-20 rounded-[55px] bg-white gap-7'>
                <div className='flex flex-col gap-1 w-full'>
                    <p className='text-[28px] text-primary font-medium'>Код класса</p>
                    <p className='text-sm'>Код класса можно узнать у преподавателя.</p>
                </div>
                <div className='w-full'>
                    <FormInput name='code' placeholder={'Код класса'} icon={faUsers} />
                </div>
                <div className='flex items-center justify-end w-full'>
                    <Action text={'Найти'} onClick={handleSubmit} icon={faMagnifyingGlass} />
                </div>
            </Form>}
        </Formik>

    )
}

export default JoinClassForm
