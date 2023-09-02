import useDict from "./forms/s/lists/useDict";




export const useCollection = () => {

    const [values, setValue, setValues] = useDict()
    const [storedValues, setStoredValue] = useDict()


    // * Items Collection Methods
    const setItems = (items) => {

        for (const item of items) {
            addItem(item.id, item)
        }

    }
    const removeItem = (id) => {
        setValues((values) => {
            const newValues = { ...values }
            delete newValues[id]
            return newValues
        })
    }

    // * Item Store Methods
    const saveProperty = (id, key) => {
        const newStoredValue = {}
        newStoredValue[key] = values[id][key]
        setStoredValue(id, newStoredValue)
    }

    const reject = (id, key) => {
        const storedValue = { ...storedValues[id] }
        setValue(id, { ...values[id], ...storedValue })
        delete storedValue[key]
        setStoredValue(id, storedValue)
    }

    const commit = (id, key) => {
        const storedValue = { ...storedValues[id] }
        delete storedValue[key]
        setStoredValue(id, storedValue)
    }

    const addItem = (id, item) => {
        setValue(id, item)
        setStoredValue(id, {})
    }

    const getItems = () => {
        const collection = []
        for (const [id, value] of Object.entries(values)) {
            collection.push([id, {
                value,
                stored: storedValues[id],
                methods: {
                    update: (data) => setValue(id, data),
                    store: (key) => saveProperty(id, key),
                    reject: (key) => reject(id, key),
                    commit: (key) => commit(id, key),
                    remove: () => removeItem(id)
                }
            }])
        }
        return collection
    }

    return [getItems, storedValues, { setItems, setValue, saveProperty, reject, commit, removeItem, addItem }]
}
