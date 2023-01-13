import css from './css/cardList.module.css'
import Card from './card'
import Menu from 'UI/Menu'
import { useState } from 'react'
import ColorMenu from 'UI/ColorMenu'



export default (props) =>  {

    
    const [menu, setMenu] = useState({active: false, coords: {x: 0, y: 0}, current: null})

    const [colorMenu, setColorMenu] = useState({active: false, coords: {x: 0, y: 0}, current: null, storedColor: null})


    const setColor = (color) => {
        let newcard = {...colorMenu.current, color: color}
        setCard(colorMenu.current.id, newcard)
        setColorMenu({...colorMenu, current: newcard})
    }
    const applyColor = () => {
        colorMenuSwitch(false)
        // request
    }
    const rejectColor = () =>{
        setCard(colorMenu.current.id, {...colorMenu.current, color: colorMenu.storedColor})
        colorMenuSwitch(false)
    }
    const setEditMode = (id, data, value) => {
        let card = {...data, editMode: value} 
        setCard(id, card)
        setMenu({...menu, current: card})
        if (!value){
            // request 
        }
    }
    const setMenuCondition = (active, coords, current) => {
        return active ? {active, coords, current} : {active, coords: {x: 0, y: 0}, current: null}
    }
    const menuSwitch = (active, coords, current) => {
        setMenu(setMenuCondition(active, coords, current))
    }
    const colorMenuSwitch = (active, coords, current) => {
        setColorMenu({...setMenuCondition(active, coords, current), storedColor: active ? current.color : null})
    }
    const setCard = (id, card) => {
        let newCards = [...props.cards]
        let index = newCards.findIndex(item => item.id == id)
        newCards[index] = card
        props.set(newCards)
    }
    const deleteCard = (id) => {
        props.set([...props.cards].filter(card => card.id != id))
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
        {text: 'Color', icon: "fa-solid fa-palette", action: () => {colorMenuSwitch(true, menu.coords, menu.current); menuSwitch(false)}},
        {text: 'Remane', icon: "fa-solid fa-pen", action: () => {setEditMode(menu.current.id, menu.current, true); menuSwitch(false)}},
        {text: 'Delete', icon: "fa-solid fa-trash", action: () => {deleteCard(menu.current.id); menuSwitch(false)}}
    ]







    return (
        <div className={css.block}>
            {props.cards.map(item => <Card disableEditMode={(id, data) => setEditMode(id, data, false)} menuOpen={menuSwitch} set={setCard} key={item.id} data={item}/>)}
            <Menu menu={menu} items={cardMenuItems}/>
            <ColorMenu menu={colorMenu} close={rejectColor} apply={applyColor} setColor={setColor} colors={colorMenuItems} />
        </div>
        
    )
}
