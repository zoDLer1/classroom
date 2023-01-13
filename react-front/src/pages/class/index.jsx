import css from './css/class.module.css'
import ClassForm from 'components/forms/class-form'
import PageSection from 'components/pageSection'


export default (props) =>  {
    console.log(props)
    return (
        <PageSection>
            {JSON.stringify(props)}
            <ClassForm />
        </PageSection>
    )
}

