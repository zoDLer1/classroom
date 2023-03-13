export const MATCHING_MODE = 1



function Access({ children, permission, current_permission }) {
    if (permission === current_permission)
    return children
}

export default Access
