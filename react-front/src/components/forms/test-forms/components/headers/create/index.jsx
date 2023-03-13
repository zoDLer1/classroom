import css from '../form-header.module.css'
import Input from 'UI/Inputs/Input'
import Select from 'UI/Inputs/Select'
import TextArea from 'UI/Inputs/TextArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'



const CreateTestHeader = ({ header, setHeaderItem }) =>  {
    const types = [
        {name:'Simple', id: 1}, 
        {name: 'By time', id: 2}
    ]

    return (
        <div className={[css.block, css.create].join(' ')}>
            <Input value={header.name} onChange={ (evt) => setHeaderItem('name', evt.target.value) } name="name" placeholder="Test name" icon={<FontAwesomeIcon icon={solid('pen')}/>}/>
            <Select value={header.type.name} select={(obj) => setHeaderItem('type', obj)} options={types} name="type" placeholder="Test type" icon={<FontAwesomeIcon icon={solid('list-ol')}/>}/>
            <div className={css.textarea}>
                <TextArea rows={'7'} value={header.description} onChange={ (evt) => setHeaderItem('description', evt.target.value) } placeholder={"Описание"} />
            </div>
        </div>
    )
}

export default CreateTestHeader