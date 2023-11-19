import React from 'react'
import css from './css/server-is-unavailable.module.css'

function ServerIsUnavalible() {
    return (
        <div className={css.block}>
            <h4>Примосим извенения, в данный момент сервера недоступны</h4>
            <i  className={`${css.icon} fa-solid fa-server`}></i>
        </div>
    )
}

export default ServerIsUnavalible
