import './css/main.css'
import './css/navigation.css'
import css from './css/header.module.css'
import { Link } from 'react-router-dom'
import NavigationItem from './NavigationItem'


export default () => {
    const isAuth = true // !!!
    const user = {username: 'zoDLer'} // !!!
    return (
        <header className={css.block}>
            <div className={css.logo}></div>
            <div className={css.navigation}>
                <NavigationItem to='/' text ='About Us'/>
                <NavigationItem to='/' text ='Tests'/>
                <NavigationItem to='/' text ='Autors'/>
                <NavigationItem to='/' text ='Contact'/>

                {
                    isAuth 
                    ? <NavigationItem to='/profile' text = {user.username} icon='fa-solid fa-user'/> // !!!
                    : <NavigationItem to='/login' text = 'Sign in' icon='fa-solid fa-arrow-right-to-bracket'/>
                }

               
            </div>
        </header>
    )
}