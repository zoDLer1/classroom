import css from './css/cardList.module.css'
import Card from './card'
import Menu from 'UI/Menu'
import { useState } from 'react'




export default (props) =>  {

    
    const [menu, setMenu] = useState({active: false, coords: {x: 0, y: 0}, current: null})


    const enableEditMode = (id, data) =>{
        setCard(id, {...data, editMode: true})
    }

    const disableEditMode = (id, data) => {
        setCard(id, {...data, editMode: false})
        // request 
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

    const toggleMenu = (evt, item) => {
        let obj = {active: !menu.active}
        if (!menu.active){
            obj.coords = {x: evt.clientX, y: evt.clientY}
            obj.current = item
        }
        else{
            obj.coords = {x: 0, y: 0}
            obj.current = null
        }
        setMenu(obj)
    }

    const cardMenu = [
        {text: 'Add to class', icon: "fa-solid fa-plus", action: () => console.log('asd')},
        {text: 'Color', icon: "fa-solid fa-palette", action: null},
        {text: 'Remane', icon: "fa-solid fa-pen", action: () => { enableEditMode(menu.current.id, menu.current); toggleMenu()}},
        {text: 'Delete', icon: "fa-solid fa-trash", action: () => {deleteCard(menu.current.id); toggleMenu()}}
    ]



    return (
        <div className={css.block}>
            {props.cards.map(item => <Card disableEditMode={disableEditMode} menuOpen={toggleMenu} set={setCard} key={item.id} data={item}/>)}
            <Menu menu={menu} items={cardMenu}/>
            {/* {JSON.stringify(menu)} */}
        </div>
        
    )
}
