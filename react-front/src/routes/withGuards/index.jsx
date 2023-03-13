

function WithGuards({ children, guards }) {
    
    for (const {guard, onReject} of guards){
        const result = guard()
        if (!result){
            const {Elem, props} = onReject
            return <Elem {...props}/>
        }
    } 
    return children
}

export default WithGuards
