import ContentUpper from './containers/ContentUpper'
import TestsForm from 'components/forms/TemplatesForm'
import { useHeaderBack } from 'hooks/globalUI/useGlobalUI'

function Templates() {
    useHeaderBack()
    return (
        <ContentUpper>
            <TestsForm />
        </ContentUpper>
    )
}

export default Templates