

function WithEmpty({ empty, children }) {
    return  children.length ? children : empty
}

export default WithEmpty
