import css from './containers.module.css'


export default function ContentCenter({ children }) {
    return (
        <div className={css.content_center}>{children}</div>
    )
}
