import Action from 'components/UI/inputs/Action'
import Input from 'components/UI/inputs/Input'
import { faPen, faCube, faLink, faArrowRightArrowLeft, faCopy, faListOl } from '@fortawesome/free-solid-svg-icons'
import ClassServise from 'services/ClassSevrice'
import useRequest from 'hooks/requests/useRequest'
import { useParams, useOutletContext } from 'react-router-dom'
import { useClassTypes, useSubjects } from 'hooks/store/useGlobalStorage'
import { useAlert } from 'hooks/globalUI/useGlobalUI'
import { Form, Formik } from 'formik'
import FormInputSender from 'components/forms/inputs/senders/FormInputSender'
import FormSelectSender from 'components/forms/inputs/senders/FormSelectSender'
import FormCheckBoxSender from 'components/forms/inputs/senders/FormCheckBoxSender'
import { ClassValidationSchema } from 'validation/Schemes'


const ClassSettingsPage = () => {
    const { id } = useParams()

    const { data, setFullData } = useOutletContext()

    const [updateRequest] = useRequest(
        async (formatedData) => await ClassServise.put(id, formatedData),
        {
            200: (resp) => setFullData(resp.data)
        }
    )

    return (
        <Formik
            enableReinitialize={true}
            validationSchema={ClassValidationSchema}
            initialValues={
                {
                    name: data.name,
                    subject: data.subject_info.id,
                    type: data.type,
                    description: data.description,
                    code: data.code,
                    settings: data.settings
                }
            }
            onSubmit={async (values, form) => {
                await updateRequest(values)
                form.setSubmitting(false)
            }}
        >
            {FormSettings}
        </Formik>
    )
}



export function FormSettings({ values }) {

    const alert = useAlert()
    const types = useClassTypes()
    const subjects = useSubjects()


    const copyLink = () => {
        navigator.clipboard.writeText(`${window.location.host}/classes/join/${values.code}`)
        alert.show('Ссылка скопирована')
    }

    return (
        <Form className='flex flex-col py-[10px] px-5'>
            <div className='flex flex-col gap-10'>
                <TitleBlock title={'Сведения'}>
                    <div className='my-8 grid grid-cols-2 gap-12 px-5'>
                        <FormInputSender icon={faPen} name='name' placeholder={'Название'} />
                        <FormSelectSender options={subjects} icon={faCube} name='subject' placeholder={'Предмет'} />
                        <FormSelectSender options={types} placeholder='Тип' name='type' icon={faListOl} />
                        <div className='col-span-full'>
                            <FormInputSender icon={faPen} name='description' placeholder={'Описание'} />
                        </div>
                    </div>
                </TitleBlock>
                <TitleBlock title={'Общие'}>
                    <div className='p-5 flex flex-col gap-9'>
                        <div className='flex justify-between'>
                            <p className='text-gray-750 font-medium mt-4'>Ссылка для приграшения:</p>
                            <div className='w-96'>
                                <Input
                                    icon={faLink}
                                    field={{ value: `${window.location.host}/classes/join/${values.code}`, onChange: () => null }}
                                    form={{ isSubmitting: false, errors: {}, touched: {} }}
                                >
                                </Input>
                                <div className='flex justify-end mt-1'>
                                    <Action text={'Поменять'} icon={faArrowRightArrowLeft} />
                                    <Action text={'Копировать'} onClick={copyLink} icon={faCopy} />
                                </div>
                            </div>
                        </div>
                        <div className={'flex items-center gap-5'}>
                            <p className='text-gray-750 font-medium'>Код класса:</p>
                            <span className='text-lg font-medium text-primary'>{values.code}</span>
                        </div>
                    </div>
                </TitleBlock>
                <TitleBlock title={'Дополнительно'}>
                    <div className='p-5 flex flex-col gap-9'>
                        <FormCheckBoxSender name='settings.allow_view_members_list'>
                            <span>Разрешать другим пользователям просматривать список участников</span>
                        </FormCheckBoxSender>
                    </div>
                </TitleBlock>
            </div>
        </Form>
    )
}

export const TitleBlock = ({ title, children }) => {
    return (
        <div className='border rounded-[20px] border-gray-450 p-[10px]'>
            <div className='px-5 pb-[10px] flex items-center justify-between pt-1'>
                <p className={'text-2xl text-primary-300'}>{title}</p>
            </div>
            {children}
        </div>
    )
}


export default ClassSettingsPage