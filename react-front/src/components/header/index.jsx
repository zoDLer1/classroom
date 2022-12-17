import './css/main.css'
import './css/navigation.css'
import { Link } from 'react-router-dom'


export default () => {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <div className="header__navigation navigation">
                <a href="#" className="navigation__link">
                    <span className="navigation__link-text">About Us</span>
                </a>
                <a href="#" className="navigation__link">
                    <span className="navigation__link-text">Tests</span>
                </a>
                <a href="#" className="navigation__link">
                    <span className="navigation__link-text">Autors</span>
                </a>
                <a href="#" className="navigation__link">
                    <span className="navigation__link-text">Contact</span>
                </a>

                <a href="#" className="navigation__link">
                    <img className="navigation__link-icon" src="/imgs/svg/enter.svg" alt="..."/>
                    <span className="navigation__link-text">Sign in</span>
                </a>
            </div>
        </header>
    )
}