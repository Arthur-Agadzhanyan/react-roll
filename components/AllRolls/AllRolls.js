import { connect } from "react-redux";
import { addToBasket, addToCost, localState } from "../../redux/actionCreator";
import RollCard from "../RollCard/RollCard";
import React from 'react'

const styles = {
    allRolls:{
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        paddingTop: '40px'
    }
}

const AllRolls = (props) => {

    React.useEffect(() => {
        localStorage.setItem('sort-rolls', JSON.stringify(props.rolls))
        localStorage.setItem('basket', JSON.stringify(props.basket))
    })

    if(!props.rolls || props.rolls == []){
        return <h2>Что-то пошло не так</h2>
    }

    return (
        <div className='rolls'>
        <div className='rolls__container'>
        {props.sort.map((roll,i)=>(
                <div className='roll__item' style={{display: roll.category === props.category || props.category === 'Все' ? 'block' : 'none'}} key={roll._id}>
                    <RollCard  onClick={() => {props.onAddToBasket(roll)}} title={roll.title} description={roll.description} cost={roll.cost} imgUrl={roll.imgUrl}/>
                </div>
            ))}
        </div>
            
        </div>
    );
}

const stateToProps = state => ({
    sort: state.sort,
    category: state.category,
    basket: state.basket
  })
  
  const dispatchToProps = dispatch => ({
      onAddToBasket: (roll)=>{
          dispatch(addToBasket(roll))
      }
  })
  
  export default connect(stateToProps,dispatchToProps)(AllRolls)