import css from './member.module.css'

function Member({ firstname, lastname }) {
    return (
        <div className={css.block}>
            <img src="https://lh3.googleusercontent.com/a/default-user=s36-c" draggable="false" alt="..." className={css.avatar} />
            <div className={css.name}>
                <p className={css.firstName}>{firstname}</p>
                <p className={css.lastName}>{lastname}</p>
            </div>
        </div>
    )
}

export default Member
