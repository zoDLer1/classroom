import { useState } from "react";

export const useMenu = () =>{
    const [menu, setMenu] = useState({active: false, coords: {x: 0, y: 0}, current: null, stored: {}})
    const switchMenu = (active, coords, current, stored) =>  setMenu((active ? {active, coords, current, stored} : {active, coords: {x: 0, y: 0}, current: null, stored: {}}))
    const updateCurrent = (current) => setMenu({...menu, current: current})
    return [menu, switchMenu, updateCurrent]

}