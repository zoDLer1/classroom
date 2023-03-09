import pagesCss from '../pages.module.css'
import TestsForm from 'components/forms/test-forms/tests-form'
import Header from 'components/header'

function Tests() {
    return (
        <>
            <Header />
            <div className={pagesCss.content_up_100_down_200}> 
                <TestsForm />
            </div>
        </>
        
    )
}

export default Tests
