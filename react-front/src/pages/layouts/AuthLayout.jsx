import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "hooks/store/useUser";
import Header from "components/header";

function AuthLayout({ waitForResponse }) {

    const user = useUser()
    if (!waitForResponse) {
        return (
            user.isAuth ?
                <>
                    <Header user={user} />
                    <Outlet />
                </>
                : <Navigate to='/accounts/login' replace />
        )
    }
}


export default AuthLayout