import 'components/forms/css/main.css'
import 'components/container/css/main.css'
import Form_input from 'components/forms/forms-components/form-input'
import Form_submit from 'components/forms/forms-components/form-submit'
import Form_password from 'components/forms/forms-components/form-input/form-input-password'
import Form_page_links from 'components/forms/forms-components/form-page-links'
import Form_password_confim from 'components/forms/forms-components/form-password-confim'


export default () => {
    return (
    <form action="" class="form container">
        <Form_page_links register='form__page-link--choosen'/>
        <div class="form__inputs form__column-container">
            <Form_input name="username" placeholder="Username" icon='fa-regular fa-user'/>
            <Form_input name="email" placeholder="Email" icon='fa-solid fa-envelope' />
            <div class="form__input form__containter form__containter--between">
                <div class="form__input-body form__containter">
                    <svg class="form__input-icon" width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0.0625C10.2342 0.0625 9.97172 0.108984 9.72235 0.198633L0.518439 3.56211C0.20672 3.67832 1.51887e-06 3.97715 1.51887e-06 4.3125C1.51887e-06 4.64785 0.20672 4.94668 0.518439 5.06289L2.41828 5.75684C1.88016 6.61348 1.575 7.62617 1.575 8.69199V9.625C1.575 10.568 1.22063 11.5408 0.843283 12.3078C0.630002 12.7395 0.387189 13.1645 0.105002 13.5562C1.51998e-06 13.699 -0.0295297 13.885 0.0295328 14.0543C0.0885953 14.2236 0.226408 14.3498 0.397033 14.393L2.49703 14.9242C2.63485 14.9607 2.7825 14.9342 2.90391 14.8578C3.02531 14.7814 3.11063 14.6553 3.13688 14.5125C3.41906 13.0914 3.27797 11.8164 3.06797 10.9033C2.96297 10.4318 2.82188 9.95039 2.625 9.50879V8.69199C2.625 7.68926 2.95969 6.74297 3.54047 5.98594C3.96375 5.47129 4.51172 5.05625 5.15485 4.80059L10.3064 2.75195C10.5755 2.6457 10.8806 2.77852 10.9856 3.05078C11.0906 3.32305 10.9594 3.63184 10.6903 3.73809L5.53875 5.78672C5.13188 5.94941 4.77422 6.19844 4.48219 6.50391L9.71906 8.41641C9.96844 8.50605 10.2309 8.55254 10.4967 8.55254C10.7625 8.55254 11.025 8.50605 11.2744 8.41641L20.4816 5.06289C20.7933 4.95 21 4.64785 21 4.3125C21 3.97715 20.7933 3.67832 20.4816 3.56211L11.2777 0.198633C11.0283 0.108984 10.7658 0.0625 10.5 0.0625ZM4.2 12.5469C4.2 13.7189 7.02188 14.9375 10.5 14.9375C13.9781 14.9375 16.8 13.7189 16.8 12.5469L16.298 7.71914L11.632 9.42578C11.2678 9.55859 10.8839 9.625 10.5 9.625C10.1161 9.625 9.72891 9.55859 9.36797 9.42578L4.70203 7.71914L4.2 12.5469Z" fill="#B6B2B1"/>
                    </svg>  
                    <select onchange="this.dataset.chosen = this.value;" data-chosen='placeholder' name="select">
                        <option disabled selected hidden value="placeholder">Role</option>
                        <option value="value2">Teacher</option>
                        <option value="value3">Student</option>
                    </select>
                </div>
                <svg class="form__input-icon" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.74331 7.43789C6.16184 7.85293 6.84152 7.85293 7.26005 7.43789L12.6172 2.12539C13.0357 1.71035 13.0357 1.03633 12.6172 0.621289C12.1987 0.20625 11.519 0.20625 11.1005 0.621289L6.50001 5.1834L1.89956 0.624609C1.48103 0.20957 0.801346 0.20957 0.382819 0.624609C-0.0357078 1.03965 -0.0357078 1.71367 0.382819 2.12871L5.73996 7.44121L5.74331 7.43789Z" fill="#B6B2B1"/>
                </svg>
                    
            </div>{/* !!! */}
            <Form_password_confim/>
        </div>
        <div class="form__input-checkbox form__statements">
            <input id="agree" type="checkbox" hidden />
            <label class="form__input-body form__containter" for="agree">
                <div>
                    I agree all statements in
                    <a class="link" href="#">Terms of servise</a>
                </div>
            </label>
        </div>
        <Form_submit text='register' />    
        <div class="form__containter form__text">
            Have already an account?
            <a href="#" class="link">Login here</a>
        </div>
    </form>
    )
}