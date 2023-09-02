import pagesCss from './pages.module.css'
import TestsForm from 'components/forms/TemplatesForm'


function Templates() {
    return (
        <div className={pagesCss.content_up_100_down_200}>
            <TestsForm />
        </div>
    )
}

export default Templates