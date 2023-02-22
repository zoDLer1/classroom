import css from './css/class-form.module.css'
import { useState } from 'react'
import formCss from 'components/forms/css/form.module.css'
import Link from 'UI/Link'
import Input from 'UI/Input'
import ClassType from './class-type'
import TestItem from './test-item'
import Button from 'UI/Button'
import Popup from 'UI/Popup'
import ClassSettings from './class-settings'

export default (props) =>  {
    const [_class, setClass] = useState({
        id: props.id,
        name: 'Class 1',
        invite: 'http://localhost:3000/classes/JK2D8D',
        type: {id: 3, name: 'by invitation'},
        tests: [
            {id: 1, name: 'Test 1', color: '#AC725E'},
            {id: 2, name: 'Test 2', color: '#D06B64'},
            {id: 3, name: 'Test 3', color: '#F83A22'},
            {id: 4, name: 'Test 4', color: '#FF7537'},
            {id: 5, name: 'Test 5', color: '#0388D4'},
        ],
    })

    const [indexs, setIndexs] = useState([0, 4])

    const [popup, setPopup] = useState({active: false})

    const computeTests = () =>{

        if (indexs[0] > indexs[1]){
            return [...[..._class.tests].slice(indexs[0], _class.tests.length),  ...[..._class.tests].slice(0, indexs[1])]
        }
        return _class.tests.slice(...indexs)
    }

    

    const next = () => {
        setIndexs([...indexs].map(item => _class.tests.length < item+1 ? _class.tests.length-item+1 : item+1))
    }

    const back = () =>{
        setIndexs([...indexs].map(item => 0 > item-1 ? _class.tests.length-item-1 : item-1))
    } 

    return (
        <>
            <form  className={[formCss.block, css.block, formCss.flex].join(' ')}>
                <div className={[formCss.flex, css.header].join(' ')}>
                    <h2 className={css.label}>{_class.name}</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi tenetur dolores autem culpa vitae, necessitatibus fuga quidem sunt expedita accusamus iusto perferendis magni, maxime quis unde vero, libero nisi!
                    <Link text='Settings' onClick={()=>setPopup({active: true})}/>
                </div>
                <div className={css.body}>
                    <div className={css.invite}>
                        <Input readOnly value={_class.invite} name='invite' placeholder='Invite link' icon={"fa-solid fa-link"} />
                        <div className={css.invite_actions}>
                            <Link text='Update link' />
                            <Link text='Copy' />
                        </div>
                    </div>
                    <div className={css.type}>
                        <h3 className={css.type_label}>Type:</h3>
                        <ClassType type={_class.type}/>
                    </div>
                    <div className={css.tests}>
                        <div className={css.view}>
                            <i onClick={back} className={`${css.next} fa-solid fa-caret-left`}></i>
                            <div className={css.list}>
                                {computeTests().map(test => <TestItem key={test.id} data={test} />)}
                            </div>
                            <i onClick={next} className={`${css.back} fa-solid fa-caret-right`}></i>
                        </div>
                        <Link to="/tests" text='View all tests' />
                    </div>
                    <div className={css.btns}>
                        <Button icon='fa-solid fa-users' text='Members'/>
                        <Button event={true} icon='fa-solid fa-users' text='Waiting Room'/>
                    </div>
                </div>
            </form>
            <Popup popup={popup}>
                <ClassSettings setPopup={setPopup} data={_class} set={setClass}/>
            </Popup>
        </>
        
    )
}
