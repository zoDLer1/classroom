import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ condition, current, coords, items }) => {
    return (
        <>
            {condition &&
                <ul style={{ left: coords[0], top: coords[1] }} className='absolute list-none rounded-2xs flex-vertical gap-1 z-10 box py-5 px-8'>
                    {items.map((item, index) =>
                        <li key={index}
                            onClick={(evt) => {
                                item.action(current, coords);
                                if (item.noneAutoClose)
                                    evt.stopPropagation()
                            }}
                            className='flex-ic gap-2.5 cursor-pointer select-none text-gray-450 hover:text-primary'
                        >
                            <FontAwesomeIcon className='w-5 text-base' icon={item.icon} size='lg' />
                            <p className='text-lg'>{item.text}</p>
                        </li>)
                    }
                </ul>
            }
        </>
    )
}


