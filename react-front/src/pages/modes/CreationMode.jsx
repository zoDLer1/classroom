import { Outlet } from "react-router-dom"

export default function CreationMode() {
    return (
        <Outlet context={{ mode: 'creation' }} />
    )
}
