import { useState } from "react";
import Loader from "UI/Loader";


export const useImgLoader = () => {
    const [loading, set] = useState(true)

    const onLoad = () => {
        set(false)
    }


    return {loaderElement: <>{loading && <Loader />}</>, imgStyle: {display: loading ? 'none' : 'block'}, onLoad}
}