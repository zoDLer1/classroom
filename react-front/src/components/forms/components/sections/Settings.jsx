import css from './css/settings.module.css'
import FormInput from '../inputs/FormInput'
import Action from 'components/UI/inputs/Action'
import Input from 'components/UI/inputs/Input'
import Select from 'components/UI/inputs/Select'
import CheckBox from 'components/UI/inputs/CheckBox'
import { faPen, faCube, faLink, faArrowRightArrowLeft, faCopy, faFloppyDisk, faListOl } from '@fortawesome/free-solid-svg-icons'
import useForm from 'hooks/forms/useForm'
import ClassServise from 'services/ClassSevrice'
import FormSelect from '../inputs/FormSelect'
import useRequest from 'hooks/useRequest'
import { useParams } from 'react-router-dom'


const Settings = ({ name, code, description, type, setClassData, subject_info }) => {
    const { id } = useParams()
    const updateRequest = useRequest(
        async (validated_data) => await ClassServise.put(id, validated_data),
        {
            200: (resp) => {
                setClassData(resp.data)
                const { name, description, type } = resp.data
                setInputsValues({name, description, type })
            }
        }

    ) 

    const { getSubmit, getInput, isEdited, setInputsValues } = useForm({
        name: {
            value: name
        },
        subject: {
            value: subject_info.id,
            options: {
                asyncLoadOptions: ClassServise.getSubjects
            }
        },
        type: {
            value: type,
            options: {
                asyncLoadOptions: ClassServise.getClassTypes
            }
        },
        description: {
            value: description,

        }

    },
    updateRequest)

    
    return (
        <div className={css.block}>
            <div className={css.sections}>
                <div className={css.cutom}>
                    <div className={css.heading}>
                        <p className={[css.text, css.title].join(' ')}>Сведения</p>
                    </div>
                    <div className={css.inputs}>
                        <FormInput icon={faPen} {...getInput('name')} placeholder={'Название'} />
                        <FormSelect icon={faCube} {...getInput('subject')} placeholder={'Предмет'} />
                        <FormSelect placeholder='Тип' {...getInput('type')} icon={faListOl} />

                        <div className={css.textarea}>
                            <FormInput icon={faPen} {...getInput('description')} placeholder={'Описание'} />
                        </div>
                    </div>
                    <div className={css.submit}>
                        <Action disabled={!isEdited} text={'Сохранить'} icon={faFloppyDisk} {...getSubmit()} />
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
                                <Input icon={faLink} value={`http://localhost:8000/classes/join${code}`} readOnly />
                                <div className={css.actions}>
                                    <Action text={'Поменять'} icon={faArrowRightArrowLeft} />
                                    <Action text={'Копировать'} icon={faCopy} />
                                </div>
                            </div>
                        </div>
                        <div className={css.invite_code}>
                            <p className={css.label}>Код класса:</p>
                            <div className={css.invite_code}>
                                <span>{code}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.main}>
                    <div className={css.heading}>
                        <p className={[css.text, css.title].join(' ')}>Дополнительно</p>
                    </div>
                    <div className={css.additionally}>
                        <CheckBox>
                            <span>Разрешать другим пользователям просматривать список участников</span>
                        </CheckBox>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Settings