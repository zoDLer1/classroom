import CardList from 'components/lists/ClassesList'
import ClassServise from 'services/ClassSevrice'
import CreateClassForm from 'components/forms/CreateClassForm'
import JoinClassForm from 'components/forms/join-class-form'
import { usePopup } from 'hooks/globalUIContent/useGlobalUI'
import { useCollection } from 'hooks/useCollection'
import { useInitialRequest } from 'hooks/useInitialRequest'
import formCss from 'components/forms/forms.module.css'
import css from './css/classes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function ClassesPage() {

    const popup = usePopup()

    const [wait] = useInitialRequest(
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
            <CardList classes={classes} storedValues={storedValues} classesActions={classesActions} />
        </div>


    )
}
export default ClassesPage