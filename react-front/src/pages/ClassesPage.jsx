import CardList from 'components/lists/ClassesList'
import ClassServise from 'services/ClassSevrice'
import CreateClassForm from 'components/forms/CreateClassForm'
import JoinClassForm from 'components/forms/JoinClassForm'
import { usePopup } from 'hooks/globalUI/useGlobalUI'
import { useCollection } from 'hooks/useCollection'
import { useInitialRequest } from 'hooks/requests/useInitialRequest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FormLoader from 'components/forms/FormLoader'
import { usePermissions } from 'hooks/store/useUser'



function ClassesPage() {

    const { isTeacher } = usePermissions()

    const popup = usePopup()

    const [waitForResponse] = useInitialRequest(
        {},
        ClassServise.all,
        {
            200: (response) => classesActions.setItems(response.data)
        }
    )

    const [classes, storedValues, classesActions] = useCollection()

    const popupOpen = () => {
        popup.open()
        const content = isTeacher ? <CreateClassForm addClass={classesActions.addItem} close={popup.close} /> : <JoinClassForm close={popup.close} />
        popup.setContent(content)
    }
    return (
        <div className='mt-12 mx-auto'>
            <div className='container flex justify-between px-10 py-8 w-full rounded-3xl mb-16'>
                <h3 className='font-bold'>Мои классы</h3>
                <div>
                    <div className='text-gray-450 cursor-pointer relative text-xl hover:text-primary' onClick={popupOpen}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>

                </div>
            </div>

            <FormLoader condition={waitForResponse}>
                <CardList classes={classes} storedValues={storedValues} classesActions={classesActions} />
            </FormLoader>

        </div>


    )
}
export default ClassesPage