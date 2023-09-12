import CardList from 'components/lists/ClassesList'
import ClassServise from 'services/ClassSevrice'
import CreateClassForm from 'components/forms/CreateClassForm'
import JoinClassForm from 'components/forms/JoinClassForm'
import { usePopup } from 'hooks/globalUI/useGlobalUI'
import { useCollection } from 'hooks/useCollection'
import { useInitialRequest } from 'hooks/requests/useInitialRequest'
import formCss from 'components/forms/forms.module.css'
import css from './css/classes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FormLoader from 'components/forms/FormLoader'

function ClassesPage() {

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
        const content = true ? <CreateClassForm addClass={classesActions.addItem} close={popup.close} /> : <JoinClassForm close={popup.close} />
        popup.setContent(content)
    }

    return (
        <div className={css.block}>
            <div className={[formCss.block, css.header].join(' ')}>
                <h3>Мои классы</h3>
                <div className={css.actions}>
                    <div className={css.action} onClick={popupOpen}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>

                </div>
            </div>
            <div className={css.body}>
                <FormLoader condition={waitForResponse}>
                    <CardList classes={classes} storedValues={storedValues} classesActions={classesActions} />
                </FormLoader>
            </div>
        </div>


    )
}
export default ClassesPage