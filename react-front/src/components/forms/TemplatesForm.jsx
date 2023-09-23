import Action from 'components/UI/inputs/Action'
import { useState } from 'react'
import Template from 'components/lists/items/Template'
import AddToClassForm from 'components/forms/AddToClassForm'
import TestsServise from 'services/TestsService'
import FormLoader from 'components/forms/FormLoader'
import { useInitialRequest } from 'hooks/requests/useInitialRequest'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import useRequest from 'hooks/requests/useRequest'
import { usePopup } from 'hooks/globalUI/useGlobalUI'
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

    const popup = usePopup()


    const [deteleTemplate] = useRequest(
        TestsServise.deteleTemplate,
        {
            204: (_, id) => setTemplates(templates.filter(template => template.id !== id))
        }
    )


    const [templates, setTemplates] = useState([])


    const popupOpen = (current) => {
        popup.setCurrent(current)
        popup.setContent(<AddToClassForm />)
        popup.open()
    }

    // [formCss.block, formCss.flex, css.block].join(' ')
    return (
        <div className='container rounded-[20px] py-8 px-10 w-[600px] m-auto'>
            <div className='border-b-2 border-gray-450'>
                <p className='text-gray-750 text-2xl mb-4'>Мои шаблоны тестов</p>
                {
                    templates.length >= 4 &&
                    <div className="mb-1 flex">
                        <Action onClick={ToTestCreation} text={'Создать'} icon={faPlus} />
                    </div>
                }

            </div>
            <div className='min-h-[200px] flex flex-col items-center justify-center'>
                <FormLoader condition={isLoading}>
                    <div className='flex flex-col my-3 w-full gap-7'>
                        {templates.map(test => <Template onAppoint={popupOpen} onDelete={deteleTemplate} key={test.id} {...test} />)}
                    </div>
                    {templates.length < 4 ?
                        <div className='flex flex-col mt-5 items-center gap-3'>
                            <p className='text-black opacity-50'>Создать шаблоны</p>
                            <Action text={'Создать'} onClick={ToTestCreation} icon={faPlus} />
                        </div>
                        :
                        <div className='flex justify-center'>
                            <Action text={'Ещё'} />
                        </div>
                    }
                </FormLoader>
            </div>
        </div>
    )
}

export default TestsForm
