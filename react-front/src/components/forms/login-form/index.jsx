import 'components/forms/css/main.css'

import Form_page_links from 'components/forms/forms-components/form-page-links'
import Form_password from 'components/forms/forms-components/form-input/form-input-password'
import Input from 'UI/Input'
import Link from 'UI/Link'
import Submit from 'UI/Submit'
import Checkbox from 'UI/Checkbox'



export default () => {
    return (
        <form class="form container">
                <Form_page_links login='form__page-link--choosen'/>
                <div class="form__inputs form__column-container">
                    <Input name="email" placeholder="Email" icon='fa-solid fa-envelope' />
                    <Form_password  name="password" placeholder="Password"/>
               
                </div>
                <Submit text='login'/>
                <div class="form__containter form__containter--between">
                    <Checkbox text='Remember me' />
                    <Link  to='/' text='Recover password' />
                </div>
                <div class="form__signup form__containter form__containter--between">
                    <p class="form__signup-text form__text">Sign up with</p>
                    <div class="form__signup-links form__containter">
                        <a href="#" class="form__signup-link">
                            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.25729 2.59615C0.5 4.3798 0.5 7.2509 0.5 12.9925V14.0075C0.5 19.7491 0.5 22.6202 2.25729 24.4038C4.01458 26.1875 6.84325 26.1875 12.5 26.1875H13.5C19.1568 26.1875 21.9854 26.1875 23.7427 24.4038C25.5 22.6202 25.5 19.7491 25.5 14.0075V12.9925C25.5 7.2509 25.5 4.3798 23.7427 2.59615C21.9854 0.8125 19.1568 0.8125 13.5 0.8125H12.5C6.84325 0.8125 4.01458 0.8125 2.25729 2.59615ZM4.71875 8.53075H7.57294C7.66669 13.3731 9.77081 15.4243 11.4375 15.8472V8.53075H14.125V12.707C15.7708 12.5273 17.5 10.6242 18.0833 8.53075H20.7708C20.5509 9.61644 20.1127 10.6443 19.4836 11.5504C18.8545 12.4563 18.048 13.2208 17.1146 13.7961C18.1568 14.3212 19.0774 15.065 19.8154 15.9781C20.5534 16.8912 21.0921 17.953 21.3958 19.0931H18.4375C18.1649 18.1027 17.6102 17.2162 16.8429 16.5447C16.0757 15.8732 15.1302 15.4466 14.125 15.3186V19.0931H13.8021C8.10419 19.0931 4.85417 15.1282 4.71875 8.53075Z" fill="#427EA4"/>
                            </svg>
                        </a>
                        <a href="#" class="form__signup-link">
                            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.519 6.59328C26.5374 6.85088 26.5374 7.10854 26.5374 7.36614C26.5374 15.2233 20.5571 24.2767 9.6269 24.2767C6.2595 24.2767 3.13135 23.3014 0.5 21.6085C0.978443 21.6637 1.43842 21.6821 1.93527 21.6821C4.71378 21.6821 7.27156 20.7437 9.31407 19.1428C6.70113 19.0876 4.5114 17.3763 3.75695 15.021C4.125 15.0761 4.49299 15.1129 4.87945 15.1129C5.41306 15.1129 5.94673 15.0393 6.44353 14.9106C3.72019 14.3585 1.67762 11.9664 1.67762 9.07743V9.00385C2.46883 9.44548 3.38895 9.72149 4.36414 9.75825C2.76325 8.69097 1.71443 6.86929 1.71443 4.80837C1.71443 3.70433 2.00879 2.69227 2.52405 1.80902C5.44982 5.41561 9.84768 7.7709 14.7791 8.02856C14.6871 7.58693 14.6319 7.12695 14.6319 6.66692C14.6319 3.3915 17.2817 0.723389 20.5754 0.723389C22.2867 0.723389 23.8324 1.44103 24.9181 2.60029C26.2613 2.34269 27.5494 1.84584 28.6903 1.16502C28.2486 2.54512 27.3102 3.70438 26.0773 4.44037C27.2734 4.31163 28.4327 3.98034 29.4999 3.52036C28.6904 4.69797 27.6783 5.74679 26.519 6.59328Z" fill="#0FB1EE"/>
                            </svg>
                                
                        </a>
                        <a href="#" class="form__signup-link">
                            <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2016 16.3125L16.0015 11.0642H11.0003V7.65838C11.0003 6.22254 11.6989 4.82295 13.9388 4.82295H16.2124V0.35457C16.2124 0.35457 14.1492 0 12.1765 0C8.05785 0 5.36572 2.51371 5.36572 7.06422V11.0642H0.787537V16.3125H5.36572V29H11.0003V16.3125H15.2016Z" fill="#4561A1"/>
                            </svg>
                        </a>
                    </div>
                </div>
        </form>
    )
}