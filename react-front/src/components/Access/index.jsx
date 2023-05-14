export const MATCHING_MODE = 1



function Access({ children, permission }) {
    if (permission()){
        return children
    }
    
}

export default Access
