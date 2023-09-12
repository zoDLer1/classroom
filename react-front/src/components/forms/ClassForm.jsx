import { useEffect, useMemo } from 'react'
import css from './css/class-from.module.css'
import { Outlet } from 'react-router-dom'
import { useLocation, useNavigate, Navigate, useParams } from 'react-router-dom'
import classNames from 'classnames/bind'


const cx = classNames.bind(css);

export const defaultRedirectPage = 'tests'



const ClassForm = ({ pages, classData, setClassData, setFullData }) => {

    const { id } = useParams()


    const navigate = useNavigate()
    const location = useLocation()
    const current = useMemo(() => pages.findIndex(item => `/classes/${id}/${item.url}` === location.pathname), [location, pages])
    

    useEffect(()=>{
        if (current === -1){
            navigate(`/classes/${id}/tests`)
        }
    }, [location])
   
  

    return (
        <div className={css.block} tabIndex={0}>

            <div className={css.body}>
                {pages.map(({ text, url }, index) =>
                    <div
                        onClick={() => navigate(url)}
                        key={index}
                        className={cx('item', { selected: current === index })}>
                        {text}
                    </div>)}
            </div>
            <div className={css.section}>
                {current !== -1 && <Outlet context={{ data: classData[pages[current].url], setData: setClassData, setFullData }} />}
            </div>

        </div>
    )
}
export default ClassForm