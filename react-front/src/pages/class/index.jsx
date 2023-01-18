import css from './css/class.module.css'
import ClassForm from 'components/forms/class-form'
import PageSection from 'components/pageSection'


export default (props) =>  {



    return (
        <PageSection className={css.section}>       
            <ClassForm id={props.router.params.id}/>
        </PageSection>
    )
}

