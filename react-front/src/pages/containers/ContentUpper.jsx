import css from './containers.module.css'


export default function ContentUpper({ children }) {
    return (
        <div className={css.content_up_100_down_200}>{children}</div>
    )
}
