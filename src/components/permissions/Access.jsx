

function Access({ children, permission }) {
    if (permission){
        return children
    }
}

export default Access
