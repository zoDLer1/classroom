import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useEffect } from 'react'


const useCurrectLocationPage = (pages, rootUrl, redirect) => {
    const location = useLocation()
    const current = useMemo(() => pages.findIndex(item => `${rootUrl}/${item.url}` === location.pathname), [location, pages])
    const navigate = useNavigate()

    useEffect(()=>{
        
        if (current === -1){
            console.log(current)
            navigate(`${rootUrl}/${redirect}`, { replace: true })
        }
    }, [location])

    return current
}

export default useCurrectLocationPage