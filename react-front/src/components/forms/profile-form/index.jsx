import css from './css/profile.module.css'
import formCss from 'components/forms/css/form.module.css'
import Input from 'UI/Input'




export default () =>  {
    return (
        <form className={[formCss.block, formCss.flex].join(' ')}>
            <div className={css.header}>
                <img src="https://cdn.promodj.com/afs/6affb743b0bce0ba29ac568bd270b27a12%3Aresize%3A1400x1400xxjpegxffffffxnoupscale%3Asame%3A480b7b.jpg" alt="..." className={css.avatar} />
                <div className={css.name_inputs}>
                    <Input placeholder='Firstname' icon='fa-regular fa-user'/>
                    <Input placeholder='Lastname' icon='fa-regular fa-user'/>
                </div>
            </div>

            <div className={css.main_inputs}>
                <Input placeholder='Email' icon='fa-solid fa-envelope'/>
                <Input placeholder='Firstname' icon='fa-regular fa-user'/>
                <Input placeholder='Lastname' icon='fa-regular fa-user'/>
                <Input placeholder='Firstname' icon='fa-regular fa-user'/>
                <Input placeholder='Lastname' icon='fa-regular fa-user'/>

            </div>
        </form>
    )
}
