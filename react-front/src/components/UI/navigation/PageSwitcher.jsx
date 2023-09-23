import cx from 'classnames'
import { useNavigate } from 'react-router-dom';



export default function PageSwitcher({ pages, current }) {

    const navigate = useNavigate()

    return (
        <div className='flex justify-center gap-4'>
            {pages.map(({ text, url }, index) =>
                <div
                    onClick={() => navigate(url)}
                    key={index}
                    className={cx('cursor-pointer py-2 px-4 rounded-t-[10px]', { 'text-primary-400 bg-primary-100 border-b-2 border-primary-400 font-medium': current === index })}
                >
                    {text}
                </div>)}
        </div>

    )
}
