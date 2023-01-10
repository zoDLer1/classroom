import css from './css/cardList.module.css'
import Card from './card'

export default (props) =>  {
    return (
        <div className={css.block}>
            {props.cards.map(item => <Card key={item.id} data={item}/>)}
        </div>
    )
}
