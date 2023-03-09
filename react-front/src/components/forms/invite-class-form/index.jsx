import css from './invite-class-form.module.css'
import formCss from 'components/forms/css/form.module.css'
import Input from 'UI/Inputs/Input'



function InviteClassForm() {
    return (
        <div onClick={evt=>evt.stopPropagation()} className={[formCss.block, formCss.flex, css.block].join(' ')}>
            <p className={css.title}>Пригласить учащихся</p>
            <div className={css.invite_link}>
                <Input placeholder={'Ссылка для приглашения'} icon="fa-solid fa-link" onChange={()=>""} value="https://google.com"/>
                <i className={`${css.copy} fa-solid fa-copy`}></i>
            </div>
            
        </div>
    )
}

export default InviteClassForm
