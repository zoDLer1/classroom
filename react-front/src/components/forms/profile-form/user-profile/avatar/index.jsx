import css from './css/avatar.module.css'
import FileLoader from './file-loader'
import Loader from 'UI/Loader'
import { useState } from 'react'
import { useImgLoader } from 'hooks/useImgLoader'

export default ({url}) =>  {
    const { loaderElement, imgStyle, onLoad } = useImgLoader()

    return (
        <div className={css.block}>
            {
            !url 
            ? <i className={`${css.empty} ${css.img} fa-solid fa-circle-user`}>
                <FileLoader />
                
            </i>
            : <div className={css.avatar}>
                <img style={imgStyle} onLoad={onLoad} className={css.img} src={url} alt="" /> 
                <FileLoader />  
                {loaderElement}
                
            </div>
            }
        </div>
    )
}

