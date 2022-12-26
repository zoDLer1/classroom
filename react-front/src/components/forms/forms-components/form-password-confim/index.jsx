import Form_password from 'components/forms/forms-components/form-input/form-input-password'

export default () =>{
    return (
        <div className='form__confim_password form__column-container'>
            <Form_password  name="password" placeholder="Password"/>
            <Form_password  name="repeat_password" placeholder="Repeat password"/>
        </div>
    )

}