import {ADD_TO_COST, USE_LOCALHOST, SORT_BY_COST, SORT_BY_ALPHABET, SORT_BY_POPULARITY, CHANGE_CATEGORY,SET_ROLLS, ADD_TO_BASKET, CLEAR_BASKET,REMOVE_FROM_BASKET, MINUS_ITEM, PLUS_ITEM, ORDER_DELIVERY} from './constants'

export function addToCost(cost){
    return {
        type: ADD_TO_COST,
        cost
    }
}

export function localState(localState){
    return {
        type: USE_LOCALHOST,
        localState
    }
}

//sortReducer

export function setRolls(state){
    return {
        type: SET_ROLLS,
        state
    }
}

export function sortByCost(state,a,b){
    return {
        type: SORT_BY_COST,
        a,// числовые значения с помощью которых можно будет контроллировать сортировку по убыванию и возрастанию цены продукта
        b,
        state 
    }
}

export function sortByAlphabet(state,a,b){
    return {
        type: SORT_BY_ALPHABET, 
        a,
        b,
        state
    }
}

export function sortByPopularity(state){
    return {
        type: SORT_BY_POPULARITY, 
        state
    }
}
// categoryReducer
export function changeCategory(category){
    return {
        type: CHANGE_CATEGORY, 
        category
    }
}

//basketReducer

export function addToBasket(roll){
    return{
        type: ADD_TO_BASKET,
        roll
    }
    
}

export function clearBasket(){
    return{
        type: CLEAR_BASKET,
    }
    
}

export function removeFromBasket(id){
    return{
        type: REMOVE_FROM_BASKET,
        id
    }
    
}

export function plusRoll(id){
    return{
        type: PLUS_ITEM,
        id
    }
    
}

export function minusRoll(id){
    return{
        type: MINUS_ITEM,
        id
    } 
}

export function orderDelivery(){
    return{
        type: ORDER_DELIVERY
    } 
}
