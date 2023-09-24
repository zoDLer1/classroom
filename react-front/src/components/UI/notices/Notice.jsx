function Notice({ children, message, messageSlyle }) {
    return (
        <div className='relative [&>*:last-child]:hover:block'>
            {children}
            <div className={"absolute w-36 bg-white px-3 py-2 rounded-xs text-sm -left-3 top-[140%] z-10 hidden border " + messageSlyle}> 
                {message}
            </div>
        </div>

    )
}

export default Notice