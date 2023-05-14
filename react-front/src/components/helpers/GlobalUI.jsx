import { GlobalUIContext } from 'contexts/GlobalUIContext';

import { useEffect, useContext } from 'react';
import { CloseContext } from 'contexts/closeContext';
import { useLocation } from 'react-router-dom';
import { usePopup } from 'hooks/usePopup';
import { useMenu } from 'hooks/useMenu';
import { useAlert } from 'hooks/useAlert';
import Alert from 'components/UI/modelWindows/Alert';
import Popup from 'components/UI/modelWindows/Popup';
import Menu from 'components/UI/modelWindows/Menu';



const GlobalUI = ({ children }) => {
    const { closeAll } = useContext(CloseContext)
    const [alertInfo, alertActions] = useAlert()
    const [popupInfo, popupActions] = usePopup()
    const [menuInfo, menuActions] = useMenu()
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

export default GlobalUI;
