import css from './layouts.module.css'
export default function MainLayout({ children }) {
    return (
        <div className={css.content_center}>{children}</div>
    )
}
