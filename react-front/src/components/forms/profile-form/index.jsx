import css from './css/profile.module.css'
import formCss from 'components/forms/css/form.module.css'
import Input from 'UI/Inputs/Input'
import EditableInput from 'UI/EditableInput'
import NavLink from 'UI/NavLink'
import { useState } from 'react'
import Statistics from './statistics'
import Profile from './user-profile'
import { useEffect } from 'react'




export default (props) =>  {
    const [componentId, setId] =  useState(1)
    const [user, setUser] = useState({
        firstname: 'Валентин',
        lastname: 'Купцов',
        email: 'test@email.com',
        avatar: 'https://thispersondoesnotexist.com/image'
    })


    




    const components = [
        <Statistics />,
        <Profile data={user}/>
    ]



    return (
        <form className={[css.block, formCss.block, formCss.flex].join(' ')}>
            <div className={[css.links, formCss.links, formCss.flex].join(' ')}>
                <NavLink onClick={() => setId(0)} text='Statistics' isChoosen={true}></NavLink>
                <NavLink onClick={() => setId(1)} text='User settings' ></NavLink>
            </div> 
                     
            {components[componentId]}
        </form>
    )
}
