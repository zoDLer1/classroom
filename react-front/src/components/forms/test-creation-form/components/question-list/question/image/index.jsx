import css from './css/image.module.css'

export default ({data, onClose, ...props}) =>  {

    // https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
    function shortenBytes(n) {
        const k = n > 0 ? Math.floor((Math.log2(n)/10)) : 0;
        const rank = (k > 0 ? 'KMGT'[k - 1] : '') + 'b';
        const count = Math.floor(n / Math.pow(1024, k));
        return count + rank;
    }


    return (
        <div className={css.block}>
            <i onClick={() => onClose(data)} className={`${css.close} fa-solid fa-xmark`}></i>
            <img src={data.url} {...props} className={css.photo}   />
            <div className={css.footer}>
                <div className={css.items}>
                    <div className={css.text}>{data.info.name}</div>
                    <div>{shortenBytes(data.info.size)}</div>
                </div>
            </div>
        </div>
        
    )
}
