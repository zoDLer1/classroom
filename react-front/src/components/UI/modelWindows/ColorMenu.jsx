import Color from './ColorItem'
import Link from 'components/UI/navigation/Link'


function ColorMenu({ condition, current, coords, items, close }) {

    if (condition) {
        return (

            <div style={{ left: coords[0], top: coords[1] }} className='flex flex-col justify-center items-center absolute rounded-[20px] py-5 px-8 z-10 shadow-70_20 bg-white' onClick={(evt) => evt.stopPropagation()}>
                <div className='grid grid-cols-4 gap-1'>
                    {items.map((item) => <Color onChange={() => item.action(current)} key={item.id} checked={item.id === current.color_info.id} value={`#${item.value}`} />)}
                </div>

                <div className='col-span-full mt-[10px] flex gap-4'>
                    <Link
                        text='Принять'
                        onClick={
                            (evt) => {
                                evt.preventDefault()
                                close()
                            }
                        }
                    />
                    <Link
                        text='Назад'
                        onClick={
                            (evt) => {
                                evt.preventDefault()
                                close()
                            }
                        }
                    />
                </div>

            </div>

        )
    }

}

export default ColorMenu
