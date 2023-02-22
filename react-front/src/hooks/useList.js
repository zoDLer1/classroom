import { useState } from "react";
import { CloseContext } from 'contexts/closeContext';
import { useContext } from "react";

export const useList = (data, onAutoClose=()=>null) => {
    const [list, setList] = useState(
        data.map(
            (item) =>{
                return {value: item, stored: {}, state: {loading: false, editMode: false}}
            }
         
        )
    )
 


    const { add, remove } = useContext(CloseContext)
    const findItemIndex = (id) => {
        return [...list].findIndex(item => item.value.id === id)
    }
    const storeProp = (id, key) =>{
        const newList = [...list]
        const index = findItemIndex(id)
        newList[index].stored[key] = newList[index].value[key]
        setList(newList)
    }
    const reject = (id, key) =>{
        const newList = [...list]
        const index = findItemIndex(id)
        newList[index].value[key] = newList[index].stored[key]
        delete newList[index].stored[key]
        setList(newList)
    }
    const commit = (id, key) => {
        const newList = [...list]
        const index = findItemIndex(id)
        delete newList[index].stored[key]
        setList(newList)
    }
    const loadingState = (id, value) =>{
        const newList = [...list]
        newList[findItemIndex(id)].state.loading = value
        setList(newList)
    }
    const editModeState = (id, value) =>{
        const newList = [...list]
        newList[findItemIndex(id)].state.editMode = value
        setList(newList)
    }
    const editModeOn = (id) => {
        editModeState(id, true)
        add({id, close: ()=> {
            editModeOff(id)
            onAutoClose(id)
        }})
    }
    const editModeOff = (id) => {
        editModeState(id, false)
        remove(id)
        
    }
    const setItemProp = (id, key, value) =>{
        const newList = [...list]
        newList[findItemIndex(id)].value[key] = value
        setList(newList)
    }
    const setItem = (data) => {
        setList([...list, {value: data, stored: {}, state: {loading: false, editMode: false}}])
    }
    const updateItem = (id, data) => {
        const newList = [...list]
        newList[findItemIndex(id)].value = data
        setList(newList)
    }
    const removeItem = (id) => {
        setList([...list].filter(item => item.value.id !== id))
    }
    
    return [list, { setItem, updateItem, removeItem, setItemProp }, {storeProp, reject, commit}, { editModeOn, editModeOff, loadingState }]
}