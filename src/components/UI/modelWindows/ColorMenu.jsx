import Color from './ColorItem'
import Link from 'components/UI/navigation/Link'


function ColorMenu({ condition, current, coords, items, close }) {

    if (condition) {
        return (

            <div style={{ left: coords[0], top: coords[1] }} className='flex-vertical-ic-jc absolute rounded-2xs py-5 px-8 z-10 box' onClick={(evt) => evt.stopPropagation()}>
                <div className='grid grid-cols-4 gap-1'>
                    {items.map((item) => <Color onChange={() => item.action(current)} key={item.id} checked={item.id === current.color_info.id} value={`#${item.value}`} />)}
                </div>

                <div className='col-span-full mt-2.5 flex gap-4'>
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
