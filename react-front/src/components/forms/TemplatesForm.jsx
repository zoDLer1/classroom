import formCss from './forms.module.css'
import css from './css/tests-form.module.css'
import Action from 'components/UI/inputs/Action'
import { useState, useContext } from 'react'
import Template from './components/sections/components/Template'
import AddToClassForm from 'components/forms/components/sections/components/AddToClassForm'
import TestsServise from 'services/TestsService'
import FormLoader from 'components/forms/formLoader'
import { useInitialRequest } from 'hooks/useInitialRequest'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import useRequest from 'hooks/useRequest'
import { GlobalUIContext } from 'contexts/GlobalUIContext'
import { useNavigate } from 'react-router-dom'


function TestsForm() {

    const navigate = useNavigate()

    const ToTestCreation = () => navigate('/tests/templates/create')
    const [isLoading] = useInitialRequest(
        {},
        TestsServise.templates,
        {
            200: (response) => setTemplates(response.data)
        }
    )

    const { popup } = useContext(GlobalUIContext)


    const [deteleTemplate] = useRequest(
        TestsServise.deteleTemplate,
        {
            204: (resp, id) => setTemplates(templates.filter(template => template.id !== id))
        }
    )


    const [templates, setTemplates] = useState([])


    const popupOpen = (current) =>{
        popup.setCurrent(current)
        popup.setContent(<AddToClassForm  />)
        popup.open()
    }

    const deleteTest = async (id) => {
        await TestsServise.delete(id)
        setTemplates((tests) => tests.filter(test => test.id !== id))
    }

    return (
        <>
            <div className={[formCss.block, formCss.flex, css.block].join(' ')}>
                <div className={css.header}>
                    <p className={css.title}>Мои шаблоны тестов</p>
                    {
                        templates.length >= 4 &&
                        <div className={css.actions}>
                            <Action onClick={ToTestCreation} text={'Создать'} icon={faPlus} />
                        </div>
                    }

                </div>
                <div className={css.content}>
                    <FormLoader condition={isLoading}>
                        <div className={css.tests}>
                            {templates.map(test => <Template onAppoint={popupOpen} onDelete={deteleTemplate} key={test.id}  {...test} />)}
                        </div>
                        {templates.length < 4 ?
                            <div className={css.empty}>
                                <p className={css.label}>Создать шаблоны</p>
                                <Action text={'Создать'} onClick={ToTestCreation} icon={faPlus} />
                            </div>
                            :
                            <div className={css.add}>
                                <Action text={'Ещё'} />
                            </div>
                        }
                    </FormLoader>
                </div>


            </div>
            {/* addToClass={()=>{open(); hook.setCurrent(test)}} */}
            {/* <Popup {...hook}>
                
            </Popup> */}
        </>

    )
}

export default TestsForm