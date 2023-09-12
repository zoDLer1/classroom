import User from "./User"

import { faXmark } from "@fortawesome/free-solid-svg-icons"


function Member({ onExcept, ...props }) {

    const actions = [
        { icon: faXmark, text: 'Удалить', styleAction: 'error', compact: true, onPress: onExcept }
    ]
    return <User {...props} actions={actions} />

}

export default Member
