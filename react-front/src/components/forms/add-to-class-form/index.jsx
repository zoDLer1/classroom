import css from './css/add-to-class-form.module.css'
import formCss from 'components/forms/css/form.module.css'
import Submit from 'UI/Inputs/Submit'
import Select from 'UI/Inputs/Select'
import { useState } from 'react'
import FormLoader from '../formLoader'
import { useLoading } from 'hooks/useLoading'
import ClassServise from 'services/ClassSevrice'
import TestsServise from 'services/TestsService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


function AddToClassForm ({ current, close }){
    const [classes, setClasses] = useState([
    ])
    const [class_, setClass] = useState({})


    const { isLoading, startLoading, stopLoading } = useLoading(
        async() =>{
            const response = await ClassServise.all(current.id)
            setClasses(response.data)
        },
        true
    )

    const submit = async (evt) =>{
        evt.preventDefault()
        startLoading()
        const response = await TestsServise.add_to_class(class_.id, current.id)
        stopLoading()
        close()
    }

    return (
        <form onClick={(evt) => evt.stopPropagation()} onSubmit={submit} className={[formCss.block, formCss.flex, css.block].join(' ')}>
            <FormLoader condition={isLoading}>
                <h2 className={css.label}>
                    <span>Add test to class</span>  
                    {class_ && <span className={css.class_}>{class_.name}</span> }
                </h2>
                <div className={[formCss.inputs, css.inputs].join(' ')}>
                    <Select select={(obj)=>{setClass(obj)}} value={class_.name} options={classes} name="class" placeholder="Class name" icon={<FontAwesomeIcon icon={solid('users')} size='sm'/>}></Select>
                </div>
                <div className={css.submit}>
                    <Submit onClick={submit} text='create'/>
                </div>
            </FormLoader>            
            
        </form>
    )
}
export default AddToClassForm