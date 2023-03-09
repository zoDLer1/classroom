import css from './class-from.module.css'
import Settings from './settings'
import { useMenu } from 'hooks/useMenu'
import { useAlert } from 'hooks/useAlert'
import Menu from 'UI/Menu'
import Alert from 'UI/alert'
import Members from './members'
import Swither from 'UI/Switcher'
import { useState } from 'react'
import Tasks from './tasks'
import { useParams } from 'react-router-dom'


const ClassForm = (props) => {

    const [menu, menuSwitch] = useMenu()
    const alertHook = useAlert()

    const { id } = useParams()


    const copyCode = () => {
        navigator.clipboard.writeText(props.data.code).then(function() {
            console.log('Async: Copying to clipboard was successful!');
            alertHook.show('Скопировано в буффер обмема')
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });

    }

    const items = [
        {text: 'Share link', icon:'fa-solid fa-share', action: () => ''},
        {text: 'Copy code', icon: 'fa-solid fa-copy', action: copyCode},
        {text: 'Change code', icon: 'fa-solid fa-arrow-right-arrow-left', action: () => ''}
    ]
    
 


    const [members] = useState({
        teacher: {
            firstname: 'Купцов',
            lastname: 'Валентин',
            avatar: null
        },
        expectations:[
            // {
            //     id: 1,
            //     firstname: 'Купцов',
            //     lastname: 'Валентин',
            //     avatar: null
            // },
        ],
        members: [
            // {
            //     id: 1,
            //     firstname: 'Купцов',
            //     lastname: 'Валентин',
            //     avatar: null
            // },
            // {
            //     id: 2,
            //     firstname: 'Купцов',
            //     lastname: 'Валентин',
            //     avatar: null
            // },
            // {
            //     id: 3,
            //     firstname: 'Купцов',
            //     lastname: 'Валентин',
            //     avatar: null
            // },
        ]
    })
    const [tests] = useState([
        {id: 1, name: 'Test1', description: 'This quiz tests your knowledge on a range of geography topics from around the world. The questions cover everything from capitals and landmarks to mountains and rivers. You will be presented with 10 multiple-choice questions, each with four possible answers. Choose the answer you think is correct, and at the end of the quiz, you will receive your score along with the correct answers. Good luck!'},
        {id: 2, name: 'Test2', description: 'This quiz tests your knowledge on a range of geography topics from around the world. The questions cover everything from capitals and landmarks to mountains and rivers. You will be presented with 10 multiple-choice questions, each with four possible answers. Choose the answer you think is correct, and at the end of the quiz, you will receive your score along with the correct answers. Good luck!'},
        {id: 3, name: 'Test3', description: 'This quiz tests your knowledge on a range of geography topics from around the world. The questions cover everything from capitals and landmarks to mountains and rivers. You will be presented with 10 multiple-choice questions, each with four possible answers. Choose the answer you think is correct, and at the end of the quiz, you will receive your score along with the correct answers. Good luck!'},
        {id: 4, name: 'Test4', description: 'This quiz tests your knowledge on a range of geography topics from around the world. The questions cover everything from capitals and landmarks to mountains and rivers. You will be presented with 10 multiple-choice questions, each with four possible answers. Choose the answer you think is correct, and at the end of the quiz, you will receive your score along with the correct answers. Good luck!'},
    ])

    const[section, setSection] = useState(0)

    const sections = [
        {elem: <Tasks class_id={id} />, text: 'Задания'},
        {elem: <Members {...members}/>, text: 'Участники'},
        {elem: <Settings />, text: 'Настройки'}
    ]

    return (
        <>
            
                <div className={[css.block].join(' ')}>
        
                    <Swither selected={section} onChange={(index) => setSection(index)} items={sections.map(section=>section.text)}></Swither>
                    <div className={css.section}>
                        {sections[section].elem}
                    </div>

                </div>
            
            

            
            <Menu size={2} menu={menu} items={items}/>
            <Alert hook={alertHook}/>
        </>
        
    )
}
export default ClassForm