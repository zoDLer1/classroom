import css from './css/class.module.css'
import ClassForm from 'components/forms/class-form'
import PageSection from 'components/pageSection'
import withRouter from 'routes/CustomRouter'

export default withRouter((props) =>  {
    console.log(props)
    return (
        <PageSection>
            {JSON.stringify(props)}
            <ClassForm />
        </PageSection>
    )
})

