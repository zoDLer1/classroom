import { useEffect, createContext, useContext } from "react";
import { useClose } from "./useClose";
import { usePopupControl } from "./usePopupControl";
import { useMenuControl } from "./useMenuControl";
import { useAlertControl } from "./useAlertControl";
import { useLocation } from "react-router-dom";
import Alert from "components/UI/modelWindows/Alert";
import Menu from "components/UI/modelWindows/Menu";
import Popup from "components/UI/modelWindows/Popup";


export const GlobalUIContext = createContext()

export const useGlobalUI = () => useContext(GlobalUIContext) 

export const useMenu = () => useGlobalUI().menu

export const usePopup = () => useGlobalUI().popup

export const useAlert = () => useGlobalUI().alert

export const GlobalUIWrapper = ({ children }) => {
    const { closeAll } = useClose()
    const [alertInfo, alertActions] = useAlertControl()
    const [popupInfo, popupActions] = usePopupControl()
    const [menuInfo, menuActions] = useMenuControl()
    const location = useLocation()

    useEffect(() => {
        closeAll()
    }, [location.pathname])

    return <GlobalUIContext.Provider value={{ alert: alertActions, popup: popupActions, menu: menuActions }}>
        <Alert {...alertInfo} {...alertActions} />
        <Popup {...popupInfo} {...popupActions}/>
        <Menu {...menuInfo}/>
        {children}
    </GlobalUIContext.Provider>
}