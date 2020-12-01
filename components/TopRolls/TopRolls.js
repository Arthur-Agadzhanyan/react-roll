import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToBasket } from '../../redux/actionCreator';
import RollCard from '../RollCard/RollCard';
import s from './top_rolls.module.scss'

const TopRolls = (props) => {
    const [food, setFood] = useState([
        {
            _id:'5f82ec67e273a01e54ba1f38',
            imgUrl: "/zapechenny-s-lososem.jpg",
            title:"Запеченный ролл с лососем",
            description:"лосось, помидор, японский омлет, икра масаго, соус сырный",
            cost: 160,
            weight:240
        },
        {
            _id: '5f81f3283eb5230a589fa4b1',
            imgUrl: "/teply-s-bekonom.jpg",
            title:"Теплый ролл с беконом",
            description:"бекон, мидии, сыр филадельфия, помидор, соус унаги, соус спайси",
            cost: 155,
            weight:215
        },
        {
            _id:'5f82f67814eddb2208926cb4',
            imgUrl: "/norimaki-s-lososem-i-ananasom.jpg",
            title:"Норимаки с лососем и ананасом",
            description:"лосось, сыр Филадельфия, ананас",
            cost: 140,
            weight: 140
        },
        {
            _id: '5f81eb66fb103f15cc81969d',
            imgUrl: "/filadelphia-classic.jpg",
            title:"Филадельфия Classic",
            description:"лосось, сыр Филадельфия, авокадо",
            cost: 170,
            weight: 195
        },
        {
            _id: '5f82fbd5c51b2d1fd8f430ba',
            imgUrl: "/futomak-kopch-losos.jpg",
            title: "Футомак с копченым лососем",
            description: "лосось копченый, сыр филадельфия, крабовая палочка, огурец, лук зеленый",
            cost: 170,
            weight:270
        },
        {
            _id:'5f81ec4d31e8b62224d88757',
            imgUrl: "/teply-s-lososem.jpg",
            title: "Теплый ролл с лососем",
            description:"лосось терияки, авокадо, сыр Филадельфия, икра масаго",
            cost: 180,
            weight:215
        },
    ]);

    return (
        <section className={s.top_rolls}>
            <h2 className={s.title}>Лучшие Роллы Месяца</h2>
            <div className={s.rolls}>
                <div className={s.rolls__container}>
                    {food.map((roll,i)=>{
                        return(
                            <div className={s.roll__item} key={`${roll}_${i}`} >
                                <RollCard  onClick={() => {props.onAddToBasket(roll)}} title={roll.title} description={roll.description} cost={roll.cost} imgUrl={roll.imgUrl} />
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    );
}
const stateToProps = state => ({
    basket: state.basket
  })

  const dispatchToProps = dispatch => ({
    onAddToBasket: (roll)=>{
        dispatch(addToBasket(roll))
    }
})

export default connect(stateToProps,dispatchToProps)(TopRolls);
