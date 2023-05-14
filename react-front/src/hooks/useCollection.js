import { useState } from "react";
import { CloseContext } from "contexts/closeContext";
import { useContext } from "react";





export const useCollection = (onAutoClose = () => null) => {

    const [collection, setList] = useState({})




    const { add, remove } = useContext(CloseContext)


    // * Items Collection Methods
    const setItems = (items) => {
        setList(() => {
            let newCollection = {}
            for (const item of items) {
                newCollection[item.id] = { value: item, stored: {}, state: { loading: false, editMode: false, selected: false } }
            }
            return newCollection
        })
    }

    // * Item Store Methods




    const storeProp = (id, key) => {
        setList(
            (collection) => {
                const newCollection = {...collection}
                newCollection[id].stored[key] = newCollection[id].value[key]
                return newCollection
            }
        )
    }
    const reject = (id, key) => {
        setList((collection) => {
            const newCollection = {...collection}
            newCollection[id].value[key] = newCollection[id].stored[key]
            delete newCollection[id].stored[key]
            return newCollection
        })
    }
    const commit = (id, key) => {
        setList((collection) => {
            const newCollection = {...collection}
            delete newCollection[id].stored[key]
            return newCollection
        })
    }

    const loadingState = (id, condition) => {
        setList((collection) => {
            const newCollection = {...collection}
            newCollection[id].state.loading = condition
            return newCollection
        })
    }

    // * Item State Methods


    const editModeState = (id, value) => {
        setList((collection) => {
            const newCollection = {...collection}
            newCollection[id].state.editMode = value
            return newCollection
        })
    }

    const editModeOn = (id) => {

        editModeState(id, true)
        add({
            id, close: () => {
                editModeOff(id)
                onAutoClose(collection[id])
            }
        })
    }
    const editModeOff = (id) => {
        editModeState(id, false)
        remove(id)

    }

    const setItemProp = (id, key, value) => {
        setList((collection) => {
            const newCollection = {...collection}
            newCollection[id].value[key] = value
            return newCollection
        })

    }

    const appendItem = (data) => {
        setList((collection) => {
            const newCollection = {...collection}
            newCollection[data.id] = { value: data, stored: {}, state: { loading: false, editMode: false, selected: false } }
            return newCollection
        })
    }

    const updateItem = (id, data) => {
        setList((collection) => {
            const newCollection = {...collection}
            newCollection[id].value = data
            return newCollection
        })
    }

    const getItem = (id) => {
        return {
            update: (data) => updateItem(id, data),
            remove: () => removeItem(id),
            setProp: (key, value) => setItemProp(id, key, value),
            editModeOn: () => editModeOn(id),
            editModeOff: () => editModeOff(id)
        }
    }

    const removeItem = (id) => {
        setList((collection) => {
            const newCollection = {...collection}
            delete newCollection[id]
            return newCollection
        })
    }

    return [collection, { setItems, addItem: appendItem, updateItem, removeItem, setItemProp, getItem }, { editModeOn, editModeOff, loadingState }, { storeProp, reject, commit }]
}
