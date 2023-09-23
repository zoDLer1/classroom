import React from 'react';


const Popup = ({ condition, stopPropRef, content, current, close }) => {
    if (condition) {
        return (
            <div className='absolute w-full h-screen bg-opacity-40 bg-black top-0 left-0 z-10 flex justify-center items-center'>
                <div ref={stopPropRef}>
                    {React.cloneElement(content, {...content.props, current, close})}
                </div>     
            </div>
        )
    }
}

export default Popup;
