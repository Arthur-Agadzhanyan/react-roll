import { useSelector } from 'react-redux';
import s from './basketcard.module.scss'

const BasketCard = ({ imgUrl, title, totalPrice, weight, totalCount, remove, plus, minus }) => {

    return (
        <div className={s.card}>
            <div className={s.card__info}>
                <img className={s.card__img} src={imgUrl} />
                <div>
                    <h2 className={s.card__title}>{title}</h2>
                    <p className={s.card__weight}>{weight}г</p>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.amount}>
                    <button className={`${s.amount__controller} ${s.minus}`} onClick={minus}>–</button>
                    <span className={s.amount__count}>{totalCount}</span>
                    <button className={s.amount__controller} onClick={plus}>+</button>
                </div>

                <p className={s.card__cost}>{totalPrice}₽</p>
                <button className={s.card__remove} onClick={remove}>&times;</button>
            </div>

        </div>
    );
}

export default BasketCard;
