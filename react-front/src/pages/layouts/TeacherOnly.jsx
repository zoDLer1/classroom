import { Outlet, Navigate } from "react-router-dom"
import { usePermissions } from "hooks/store/useUser"


export default function TeacherOnly() {

    const { isTeacher } = usePermissions()

    return (
        isTeacher 
            ? <Outlet />
            : <Navigate to={-1}  replace />
    )
}
