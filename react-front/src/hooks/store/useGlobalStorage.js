import { createContext, useContext } from 'react'
import useGlobalData from './useGlobalData';
import ClassServise from 'services/ClassSevrice';


export const GlobalStorageContext = createContext();

export function GlobalStorageWrapper({ children }) {

    const getSubjects = useGlobalData([], ClassServise.getSubjects)
    
    const getClassTypes = useGlobalData([], ClassServise.getClassTypes)
 
    return (
        <GlobalStorageContext.Provider value={{ getSubjects, getClassTypes }}>{children}</GlobalStorageContext.Provider>
    )
}


export const useSubjects = () => useContext(GlobalStorageContext).getSubjects

export const useClassTypes = () => useContext(GlobalStorageContext).getClassTypes
