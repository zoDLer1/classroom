import { useInitialRequest } from "hooks/requests/useInitialRequest"
import ClassServise from "services/ClassSevrice"
import { useParams } from "react-router-dom"
import { useInfoAndRedirect } from "hooks/globalUI/useInfoAndRedirect"


export default function ClassJoinPage() {
    const { uuid } = useParams()
    const redirect = useInfoAndRedirect()

    useInitialRequest(
        uuid,
        ClassServise.join,
        {
            200: (response) =>  redirect(response.data.detail),
            403: (response) => redirect(response.response.data.detail),
            404: () => redirect('Класс не найден'),
            400: (response) => redirect(response.response.data.detail),
        }
    )
    


}
