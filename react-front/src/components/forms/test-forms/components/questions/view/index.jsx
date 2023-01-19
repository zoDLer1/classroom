import css from '../css/question.module.css'
import TextAnswer from 'components/forms/test-forms/components/answers/text-answer/view'
import FewFromListAnswer from 'components/forms/test-forms/components/answers/few-from-list-answer/view'
import OneFromListAnswer from 'components/forms/test-forms/components/answers/one-from-list-answer/view'
import Image from 'components/forms/test-forms/components/image/view'


export default (props) =>  {


    const elems = {
        1: { 
            elem: <TextAnswer numb={props.numb} value={props.data.answer} />
        },
        2: {
            elem: <OneFromListAnswer numb={props.numb} value={props.data.answer} />
        },
        3: {
            elem: <FewFromListAnswer numb={props.numb} value={props.data.answer} />
        }
    }


    let cols = 1
    if (props.data.photos.length > 1){
        cols = 2
    }
    if (props.data.photos.length > 4){
        cols = 3
    }

    return (
        <div className={css.block}>     
        <div className={css.header}>
            <h2 className={css.label}>{props.data.name}</h2>
        </div>
        {props.data.photos.length 
            ? <div className={css.photos} style={{gridTemplateColumns: `repeat(${cols}, 1fr)`}}>
                {props.data.photos.map((item) => <Image  data={item} alt="..." />)}
            </div>: ''}

        <div className={css.body}>
            <div className={css.answer}>
                {elems[props.data.answer_type.id].elem}
            </div>
        </div>
        <div className={css.footer}>
   
            
            { props.data.time &&
                <>
                    <div className={css.time_view}>
                        <p>Time:</p>
                        <p >{props.data.time}</p>
                    </div>
                    <p className={css.time_view}>/</p>
                </>
                
            }
           
           
            {props.data.required 
            ? <p className={[css.required, css.required_true].join(' ')}>Requeired</p>
            : <p className={css.required}>Not requeired</p>}
        </div>

    </div>
    )
}
