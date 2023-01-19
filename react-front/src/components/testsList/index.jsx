import css from './css/cardList.module.css'
import Card from './card'
import Menu from 'UI/Menu'
import ColorMenu from 'UI/ColorMenu'
import { useMenu } from 'hooks/useMenu'
import { useList } from 'hooks/useList'


export default (props) =>  {
    
    
    

    const [tests, set, remove] =  useList([
        {id: 1, name: 'Test 1', color: '#0388D4', loading: false, editMode: false,  events: [
            {id: 213, name: 'Added new test', link: 'pass now', time: Date.now()}, 
            {id: 231, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, quae! Minima, aliquam praesentium ut ex vel obcaecati modi minus, tempore accusantium in ipsam voluptas asperiores distinctio quo necessitatibus quisquam consectetur!', link: 'view', time: 0},
            {id: 435, name: 'Test checked', link: 'check', time: 0}
        ]},
        {id: 2, name: 'Test 2', color: '#F0A720', loading: false, editMode: false, events: []}
    ])

    const [menu, menuSwitch] = useMenu()
    const [colorMenu, colorMenuSwitch, updateCurrent] = useMenu()

    const setColor = (color) => {
        let newcard = {...colorMenu.current, color: color}
        set(colorMenu.current.id, newcard)
        updateCurrent(newcard)
    }

    const applyColor = () => {
        colorMenuSwitch(false)
        // request
    }

    const rejectColor = () =>{
        set(colorMenu.current.id, {...colorMenu.current, color: colorMenu.stored.color})
        colorMenuSwitch(false)
    }

    const colorMenuItems = [
        '#AC725E',
        '#D06B64',
        '#F83A22',
        '#FF7537',
        '#0388D4',
        '#F0A720',
        '#00B94F',
        '#A47AE2'
    ]
    const cardMenuItems = [
        {text: 'Add to class', icon: "fa-solid fa-plus", action: () => {props.switchPopup(true, menu.current); menuSwitch(false)}},
        {text: 'Color', icon: "fa-solid fa-palette", action: () => {colorMenuSwitch(true, menu.coords, menu.current, {color: menu.current.color}); menuSwitch(false)}},
        {text: 'Remane', icon: "fa-solid fa-pen", action: () => {set(menu.current.id, {...menu.current, editMode: true}); menuSwitch(false)}},
        {text: 'Delete', icon: "fa-solid fa-trash", action: () => {remove(menu.current.id); menuSwitch(false)}}
    ]
    
    return (
        <div className={css.block}>
            {tests.map(item => <Card  menuOpen={menuSwitch} set={set} key={item.id} data={item}/>)}
            <Menu menu={menu} items={cardMenuItems}/>
            <ColorMenu menu={colorMenu} close={rejectColor} apply={applyColor} setColor={setColor} colors={colorMenuItems} />
        </div>
        
    )
}
