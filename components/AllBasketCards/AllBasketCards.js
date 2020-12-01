import { useEffect } from "react";
import { connect } from "react-redux";
import { minusRoll, plusRoll, removeFromBasket } from "../../redux/actionCreator";
import BasketCard from "../BasketCard/BasketCard";

const AllBasketCards = (props) => {
    return (
        <div className='addedCards'>
            {props.cards.map((item,i)=>{
                return (
                <div key={`${item}_${i}`}>
                    <BasketCard 
                    imgUrl={item.imgUrl} 
                    title={item.title} 
                    totalPrice={props.items[item._id].totalPrice} 
                    totalCount={props.items[item._id].items.length} 
                    weight={item.weight} 
                    remove={()=>props.onRemoveFromBasket(item._id)} 
                    minus={()=> props.onMinusItem(item._id)} 
                    plus={()=> props.onPlusItem(item._id)}/>
                </div>
            )})}
        </div>
    );
}
const stateToProps = state => ({
    basket: state.basket.items
  })
  
  const dispatchToProps = dispatch => ({
      onRemoveFromBasket: (id)=>{
          dispatch(removeFromBasket(id))
      },
      onPlusItem: (id)=>{
        dispatch(plusRoll(id))
    },
    onMinusItem: (id)=>{
        dispatch(minusRoll(id))
    }
  })
  
  export default connect(stateToProps,dispatchToProps)(AllBasketCards) ;
