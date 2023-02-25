function ElementLayer({ element, guards }) {

    const GetAccess = () => {
        let access = true
        let rejected = null
        for (const [guard, reject] of guards){
            if (!guard()){
                access = false
                rejected = reject
                break
            }
        }
        return [access, rejected]
    }
    

    const [access, Reject] = GetAccess() 

    return <>
        { access
        ? element
        : <Reject></Reject>}
    
    </>

}

export default ElementLayer
