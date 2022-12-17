import 'components/forms/css/main.css'
import Link from 'components/link'

export default () => {
    return (
        <form class="form container">
                <div class="form__layer">
                    <div class="gears form__gears">
                        <svg class="gear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50">
                            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/>
                        </svg>
                        <svg class="gear"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40">
                            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/>
                        </svg>
                    </div>
                </div>
                <div class="form__page-links form__containter">
                    <a href="#" class="form__page-link form__page-link--choosen">Sign in</a>
                    <a href="#" class="form__page-link">Register</a>
                </div>
                <div class="form__inputs form__column-container">
                    <div class="form__input form__containter form__containter--between">
                        <div class="form__input-body form__containter">
                            
                            <svg class="form__input-icon" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 0C0.671875 0 0 0.671875 0 1.5C0 1.97187 0.221875 2.41562 0.6 2.7L7.4 7.8C7.75625 8.06563 8.24375 8.06563 8.6 7.8L15.4 2.7C15.7781 2.41562 16 1.97187 16 1.5C16 0.671875 15.3281 0 14.5 0H1.5ZM0 3.5V10C0 11.1031 0.896875 12 2 12H14C15.1031 12 16 11.1031 16 10V3.5L9.2 8.6C8.4875 9.13438 7.5125 9.13438 6.8 8.6L0 3.5Z" fill="#B6B2B1"/>
                            </svg>
                            <input name="email" placeholder="Email" type="text"/>
                        </div>
                    </div>

                    <div class="form__input form__containter form__containter--between">
                        <div class="form__input-body form__containter">
                            <svg class="form__input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 11C13.5375 11 16 8.5375 16 5.5C16 2.4625 13.5375 0 10.5 0C7.4625 0 5 2.4625 5 5.5C5 6.08437 5.09063 6.65 5.25938 7.17812L0.21875 12.2188C0.078125 12.3594 0 12.55 0 12.75V15.25C0 15.6656 0.334375 16 0.75 16H3.25C3.66563 16 4 15.6656 4 15.25V14H5.25C5.66563 14 6 13.6656 6 13.25V12H7.25C7.45 12 7.64062 11.9219 7.78125 11.7812L8.82187 10.7406C9.35 10.9094 9.91562 11 10.5 11ZM11.75 5.5C11.0594 5.5 10.5 4.94063 10.5 4.25C10.5 3.55938 11.0594 3 11.75 3C12.4406 3 13 3.55938 13 4.25C13 4.94063 12.4406 5.5 11.75 5.5Z" fill="#B6B2B1"/>
                            </svg>
                            <input class="jquery__password" name="password" placeholder="Password" type="password"/>
                        </div>
                        <div class="form__input-checkbox">
                            <input class="jquery__show-password" id="password-show" type="checkbox" hidden/>
                            <label class="form__show-password" for="password-show">
                                <svg class="form__input-icon" width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.47408 2.71805C5.78924 1.70731 7.47549 0.937678 9.50018 0.937678C11.8989 0.937678 13.8197 2.01697 15.218 3.29901C16.6074 4.57049 17.5366 6.06756 17.976 7.13983C18.0739 7.37127 18.0739 7.62908 17.976 7.86053C17.5781 8.80682 16.7796 10.1398 15.6039 11.3293L18.7271 13.7433C19.0358 13.9836 19.0922 14.426 18.8488 14.7306C18.6053 15.0353 18.1571 15.091 17.8483 14.8508L0.273184 1.25672C-0.036516 1.01707 -0.0908144 0.575276 0.15194 0.269592C0.394725 -0.0360331 0.842412 -0.0896171 1.15235 0.149943L4.47408 2.71805ZM5.63487 3.61834L7.00049 4.67303C7.66846 4.09881 8.54424 3.75018 9.50018 3.75018C11.5991 3.75018 13.3002 5.42889 13.3002 7.50018C13.3002 8.12127 13.1488 8.70428 12.8786 9.2199L14.4758 10.4562C15.4703 9.45721 16.2066 8.29412 16.5836 7.50018C16.1531 6.5949 15.3902 5.37615 14.2472 4.32733C13.0271 3.21112 11.4358 2.31756 9.50018 2.31756C8.00096 2.31756 6.68283 2.86336 5.63487 3.61834ZM11.7238 8.32635C11.8217 8.06854 11.8752 7.79022 11.8752 7.47381C11.8752 6.20526 10.8124 5.13006 9.50018 5.13006C9.4794 5.13006 9.46159 5.15643 9.41408 5.15643C9.4794 5.30584 9.50018 5.46405 9.50018 5.59881C9.50018 5.92401 9.42893 6.20526 9.30424 6.45428L11.7238 8.32635ZM12.0028 12.1437L13.2467 13.1105C12.1691 13.6847 10.9192 14.0627 9.50018 14.0627C7.10143 14.0627 5.18065 12.9846 3.78237 11.7013C2.39358 10.4035 1.46496 8.90643 1.02321 7.86053C0.925834 7.62908 0.925834 7.37127 1.02321 7.13983C1.30643 6.46893 1.79004 5.60174 2.46691 4.73162L3.58643 5.60174C3.03127 6.28436 2.66493 6.96112 2.41822 7.47381C2.82108 8.37908 3.61018 9.6242 4.75315 10.673C5.9733 11.7892 7.56455 12.6564 9.50018 12.6564C10.4116 12.6564 11.2458 12.4631 12.0028 12.1437ZM5.70018 7.47381C5.70018 7.41522 5.70315 7.33319 5.70908 7.25115L7.37455 8.54608C7.68627 9.16424 8.26815 9.62713 8.9658 9.75897L10.6342 11.0803C10.275 11.1652 9.89502 11.2502 9.47346 11.2502C7.40127 11.2502 5.67346 9.57147 5.67346 7.47381H5.70018Z" fill="#B6B2B1"/>
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="form__input-submit">
                    <input id="submit" hidden type="submit"/>
                    <label for="submit">login</label>
                </div>

                <div class="form__input-checkbox form__containter form__containter--between">
                    <input id="agree" type="checkbox" hidden/>
                    <label class="form__input-body form__containter" for="agree">Remember me</label>
                    <div class="">
                        <Link name='Recover password' />
                    </div>
                    
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