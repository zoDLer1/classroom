import css from './containers.module.css'


export default function ContentCenter({ children }) {
    return (
        <div className={[css.content, css.content_center].join(' ')}>{children}</div>
    )
}
