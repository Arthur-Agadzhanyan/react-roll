import s from './rollcard.module.scss'
import PropTypes from 'prop-types';
import Image from 'next/image'

const RollCard = ({ title, description, cost, imgUrl, onClick,style }) => {
    return (
        <div style={style} className={s.roll_block}>

            <Image 
            className={s.roll__img} 
            src={imgUrl} 
            width = {500}
            height = {500}
            alt={description}></Image>

            <h4 className={s.roll__title} >{title}</h4>
            <div className={s.roll__composition}>
                Состав: {description}
                {/* Состав: кунжут, лосось копченый, огурец, соус унаги, сыр Филадельфия, угорь */}
            </div>
            <div className={s.roll__bottom}>
                <div className={s.roll__cost}>{cost} ₽</div>
                <div>
                    <button className={s.roll__add} onClick={onClick}>+ Добавить </button>
                </div>
            </div>
        </div>
    );
}

RollCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    cost: PropTypes.number,
    imgUrl: PropTypes.string
}

export default RollCard;

