import User from "./User"

import { faEye } from "@fortawesome/free-solid-svg-icons"


function PassedTest({ onView, ...props }) {

    const actions = [
        { icon: faEye, text: 'Просмотреть', compact: true, onPress: onView }
    ]
    return <User {...props} actions={actions} />

}

export default PassedTest