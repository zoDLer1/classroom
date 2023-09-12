import { useState, createContext, useContext } from "react";


export const CloseContext = createContext()

export const useClose = () => useContext(CloseContext)


export const CloseWrapper = ({ children }) => {
    const { items, ...funtions } = useClosing()

    return <CloseContext.Provider value={funtions} >
        <div onClick={funtions.closeAll} className='page-root'>{children}</div>
    </CloseContext.Provider>
}

export function useClosing() {

    const [items, setItems] = useState([])


    const add = (item) => {
        setItems((items) => [...items, item])
    }

    const remove = (id) => {
        setItems((items) => [...[...items].filter(item => item.id !== id)])
    }

    const closeAll = (evt) => {
        for (const item of items) {
            if (item.stopPropRef.current) {
                if (!item.stopPropRef.current.contains(evt.target)) {
                    item.close()
                }
                else{
                    console.log('not closed')
                }
            }
            else {
                item.close()
            }
        }
    }

    return { items, add, remove, closeAll }
}
