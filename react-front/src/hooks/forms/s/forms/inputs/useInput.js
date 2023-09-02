import { useEffect } from "react"

const useInput = ({ methods, isTriggerSubmit }, getValue) => {
    
    const onChange = (evt) => {
        methods.setValue(getValue(evt))
    }

    const onTriggerSubmit = () => {
        if (isTriggerSubmit) {
            methods.triggerSubmit()
        }
    }

    return { onChange, onTriggerSubmit }
}

export default useInput