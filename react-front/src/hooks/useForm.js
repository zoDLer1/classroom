import { useState } from "react"



function useForm(inputs) {
    const [items, setItems] = useState({
        email: { value: '', error: false, validation: [] },
        password: { value:'', error: false,  validation: []},
    }) 
    
    
    const changeValue = (key, value) => {
        const newItems = {...items}
        newItems[key].value = value
        setItems(newItems)
    }



    


}

export default useForm
