import css from './css/join-class-form.module.css'
import formCss from 'components/forms/css/form.module.css'
import FormInput from './inputs/FormInput'
import Action from 'components/UI/inputs/Action'
import { faUsers, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import useRequest from 'hooks/requests/useRequest'
import ClassServise from 'services/ClassSevrice'
import { useInfoAndRedirect } from "hooks/globalUI/useInfoAndRedirect"

function JoinClassForm({ close }) {

    const redirect = useInfoAndRedirect(false)

    const redirectAndClose = (info) =>{
        redirect(info)
        close()
    } 

    const request = useRequest(
        async (data) => await ClassServise.join(data.code),
        {
            200: (response) => redirectAndClose(response.data.detail),
            403: (response) => redirectAndClose(response.response.data.detail),
            404: () => redirectAndClose('Класс не найден'),
            400: (response) => redirectAndClose(response.response.data.detail),
        }
    )




    return (

        <div onClick={evt => evt.stopPropagation()} className={[formCss.block, formCss.flex, css.block].join(' ')}>


            {/* <div className={css.header}>
                <p className={css.title}>Код класса</p>
                <p className={css.description}>Код класса можно узнать у преподавателя.</p>
            </div>
            <FormInput {...getInput('code')} placeholder={'Код класса'} icon={faUsers} />
            <div className={css.actions}>
                <Action text={'Найти'} {...getSubmit()} icon={faMagnifyingGlass} />
            </div> */}
        </div>
    )
}

export default JoinClassForm
