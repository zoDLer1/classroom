import css from './css/settings.module.css'
import Action from 'components/UI/inputs/Action'
import Input from 'components/UI/inputs/Input'
import { faPen, faCube, faLink, faArrowRightArrowLeft, faCopy, faFloppyDisk, faListOl } from '@fortawesome/free-solid-svg-icons'
import ClassServise from 'services/ClassSevrice'
import useRequest from 'hooks/requests/useRequest'
import { useParams, useOutletContext } from 'react-router-dom'
import { useClassTypes, useSubjects } from 'hooks/store/useGlobalStorage'
import { useAlert } from 'hooks/globalUI/useGlobalUI'
import { Form, Formik } from 'formik'
import FormInputSender from 'components/forms/inputs/senders/FormInputSender'
import FormSelectSender from 'components/forms/inputs/senders/FormSelectSender'
import FormCheckBoxSender from 'components/forms/inputs/senders/FormCheckBoxSender'



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
        <Form className={css.block}>
            <div className={css.sections}>
                <div className={css.cutom}>
                    <div className={css.heading}>
                        <p className={[css.text, css.title].join(' ')}>Сведения</p>
                    </div>
                    <div className={css.inputs}>
                        <FormInputSender icon={faPen} name='name' placeholder={'Название'} />
                        <FormSelectSender options={subjects} icon={faCube} name='subject' placeholder={'Предмет'} />
                        <FormSelectSender options={types} placeholder='Тип' name='type' icon={faListOl} />
                        <div className={css.textarea}>
                            <FormInputSender icon={faPen} name='description' placeholder={'Описание'} />
                        </div>
                    </div>
                </div>
                <div className={css.main}>
                    <div className={css.heading}>
                        <p className={[css.text, css.title].join(' ')}>Общие</p>
                    </div>
                    <div className={css.invites}>
                        <div className={css.invite_link}>
                            <p className={css.label}>Ссылка для приграшения:</p>
                            <div className={css.input}>
                                <Input
                                    icon={faLink}
                                    field={{ value: `${window.location.host}/classes/join/${values.code}`, onChange: () => null }}
                                    form={{ isSubmitting: false, errors: {}, touched: {} }}
                                >
                                </Input>
                                <div className={css.actions}>
                                    <Action text={'Поменять'} icon={faArrowRightArrowLeft} />
                                    <Action text={'Копировать'} onClick={copyLink} icon={faCopy} />
                                </div>
                            </div>
                        </div>
                        <div className={css.invite_code}>
                            <p className={css.label}>Код класса:</p>
                            <div className={css.invite_code}>
                                <span>{values.code}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.main}>
                    <div className={css.heading}>
                        <p className={[css.text, css.title].join(' ')}>Дополнительно</p>
                    </div>
                    <div className={css.additionally}>
                        <FormCheckBoxSender name='settings.allow_view_members_list'>
                            <span>Разрешать другим пользователям просматривать список участников</span>
                        </FormCheckBoxSender>
                    </div>
                </div>
            </div>
        </Form>
    )
}


export default ClassSettingsPage