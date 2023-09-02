import { useEffect } from 'react'
import css from './css/class-from.module.css'
import { Outlet } from 'react-router-dom'
import { useLocation, useNavigate, Navigate, useParams } from 'react-router-dom'
import classNames from 'classnames/bind'


const cx = classNames.bind(css);

export const defaultRedirectPage = 'tests'



const ClassForm = ({ pages, classData, setClassData, setFullData }) => {

    const { id } = useParams()

    const defaultRedirect = <Navigate to={`/classes/${id}/${defaultRedirectPage}`} state={{ key: defaultRedirectPage }} />

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!location.state?.key) {
            navigate(defaultRedirectPage, { replace: true, state: { key: defaultRedirectPage } })
        }
    }, [location])


    const navigateTo = (page) => navigate(page, { state: { key: page } })






    return (
        <div className={css.block} tabIndex={0}>

            <div className={css.body}>
                {Object.entries(pages).map(([key, value]) =>
                    <div
                        onClick={() => navigateTo(key)}
                        key={key}
                        className={cx('item', { selected: key === location.state?.key })}>
                        {value}
                    </div>)}
            </div>
            <div className={css.section}>
                <Outlet context={{ data: classData[location.state?.key], setData: setClassData, setFullData, defaultRedirect }} />
            </div>

        </div>
    )
}
export default ClassForm