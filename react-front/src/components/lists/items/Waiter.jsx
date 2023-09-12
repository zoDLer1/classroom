import User from "./User"

import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons"


function Waiter({ onExcept, onAccept, isTeacher, ...props }) {

    const actions = [
        { icon: faCheck, text: 'Принять', compact: true, onPress: onAccept },
        { icon: faXmark, text: 'Удалить', styleAction: 'error', compact: true, onPress: onExcept }
    ]
    return <User {...props} actions={actions} />

}

export default Waiter
