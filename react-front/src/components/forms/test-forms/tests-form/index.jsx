import formCss from '../../forms.module.css'
import css from './tests-form.module.css'
import Action from 'UI/Inputs/action'
import { useState } from 'react'
import TestTemplate from './test-template'
import { usePopup } from 'hooks/usePopup'
import Popup from 'UI/Popup'
import AddToClassForm from 'components/forms/add-to-class-form'
import TestsServise from 'services/TestsService'
import FormLoader from 'components/forms/formLoader'
import { useLoading } from 'hooks/useLoading'

function TestsForm() {
    const { isLoading } = useLoading(
        async ()=>{
            try{
                const responese = await TestsServise.all()
                setTests(responese.data)
            }   
            catch{
    
            }
        },
        true
    )

    const [tests, setTests] = useState([])

    

 

    const {open, ...hook} = usePopup()

    

    const deleteTest = async (id) =>{
        await TestsServise.delete(id)
        setTests((tests)=>tests.filter(test=> test.id !== id))
    }

    return (
        <>
            <div className={[formCss.block, formCss.flex, css.block].join(' ')}>
                <div className={css.header}>
                    <p className={css.title}>Мои шаблоны тестов</p>
                    {
                        tests.length >= 4 
                        ? <div className={css.actions}>
                            <Action to={'/tests/create'} text={'Создать'} icon="fa-solid fa-plus"/>
                        </div>
                        : <></>
                    }
                    
                </div>
                <div className={css.content}>
                    <FormLoader condition={isLoading}>
                        <div className={css.tests}>
                            {tests.map(test=><TestTemplate remove={() => deleteTest(test.id)} addToClass={()=>{open(); hook.setCurrent(test)}} key={test.id}  {...test} />)}
                        </div>
                        {tests.length < 4 ? 
                            <div className={css.empty}>
                                <p className={css.label}>Создать шаблоны</p>
                                <Action text={'Создать'} to={'/tests/create'} icon="fa-solid fa-plus"/>
                            </div>
                            :
                            <div className={css.add}>
                                <Action text={'Ещё'}/>
                            </div>
                            }
                    </FormLoader>
                </div>
                
                        
            </div>
            <Popup {...hook}>
                <AddToClassForm close={hook.close} current={hook.current} />
            </Popup>
        </>
        
    )
}

export default TestsForm
