import { useEffect, createContext, useContext } from "react";
import { useClose } from "./useClose";
import { usePopupControl } from "./controls/usePopupControl";
import { useMenuControl } from "./controls/useMenuControl";
import { useAlertControl } from "./controls/useAlertControl";
import { useLocation } from "react-router-dom";
import Alert from "components/UI/modelWindows/Alert";
import Menu from "components/UI/modelWindows/Menu";
import Popup from "components/UI/modelWindows/Popup";
import useHeaderControl from "./controls/useHeaderControl";


export const GlobalUIContext = createContext()

export const useGlobalUI = () => useContext(GlobalUIContext)

export const useMenu = () => useGlobalUI().menu

export const usePopup = () => useGlobalUI().popup

export const useAlert = () => useGlobalUI().alert

export const useHeader = () => useGlobalUI().header[1]

export const useHeaderInfo = () => useGlobalUI().header[0]

export const useHeaderBack = (deps = [], to) => {
    const { setBack } = useHeader()
    const location = useLocation()

    useEffect(() => {
        setBack(location.pathname, to)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}

export const useHeaderActions = (actions) => {

    const { setActions } = useHeader()
    const location = useLocation()
    
    useEffect(() => {
        setActions(actions, location.pathname)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}


export const GlobalUIWrapper = ({ children }) => {
    const { closeAll } = useClose()
    const headerController = useHeaderControl()
    const [alertInfo, alertActions] = useAlertControl()
    const [popupInfo, popupActions] = usePopupControl()
    const [menuInfo, menuActions] = useMenuControl()
    const location = useLocation()

    useEffect(() => {
        closeAll()
        headerController[1].clearActions(location.pathname)
        headerController[1].clearBack(location.pathname)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    return <GlobalUIContext.Provider value={{ alert: alertActions, popup: popupActions, menu: menuActions, header: headerController }}>
        <Alert {...alertInfo} {...alertActions} />
        <Popup {...popupInfo} {...popupActions} />
        <Menu {...menuInfo} />
        {children}
    </GlobalUIContext.Provider>
}