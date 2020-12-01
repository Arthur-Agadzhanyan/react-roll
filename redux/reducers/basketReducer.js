import { ADD_TO_BASKET,CLEAR_BASKET, REMOVE_FROM_BASKET,MINUS_ITEM,PLUS_ITEM, ORDER_DELIVERY } from "../constants"

let initialState = {
    items: {},
    totalPrice: 0,
    count: 0,
    modal: false
}

if (typeof window !== "undefined") {
    if(localStorage.getItem('basket')){
        initialState = JSON.parse(localStorage.getItem('basket'))
    }
}

const getTotalPrice = (arr)=>arr.reduce((total,roll)=>total + roll.cost,0)


export default function basketReducer(state=initialState,action){
    switch(action.type){
        case ADD_TO_BASKET:{
            const currentRollItems = !state.items[action.roll._id]
            ?[action.roll]
            :[...state.items[action.roll._id].items,action.roll];

            const newItems = {
                ...state.items,
                [action.roll._id]:{
                    items: currentRollItems,
                    totalPrice: getTotalPrice(currentRollItems)
                }
            }

            const count = Object.keys(newItems).reduce((sum,key)=> newItems[key].items.length + sum,0)
            const totalPrice = Object.keys(newItems).reduce((sum,key)=> newItems[key].totalPrice + sum,0)

            return{
                ...state,
                items: newItems,// создали переменную для того чтобы можно было удобно взаимодействовать с актуальными данными
                count,
                totalPrice
            }
        }   

        case CLEAR_BASKET:
            return {
                items: {},
                totalPrice: 0,
                count: 0
            }
            
        case REMOVE_FROM_BASKET:{
            const filteredItems = {
                ...state.items
            }
            const currentTotalPrice = filteredItems[action.id].totalPrice
            const currentTotalCount= filteredItems[action.id].items.length

            delete filteredItems[action.id]
            return {
                ...state,
                items: filteredItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                count: state.count - currentTotalCount
              }
        }
        case PLUS_ITEM:{
            
            const newObjItems = [...state.items[action.id].items,state.items[action.id].items[0]]
            

            const newItems = {
                ...state.items,
                [action.id]:{
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }
            const count = Object.keys(newItems).reduce((sum,key)=> newItems[key].items.length + sum,0)
            const totalPrice = Object.keys(newItems).reduce((sum,key)=> newItems[key].totalPrice + sum,0)

            return {
                ...state,
                items: newItems,
                count,
                totalPrice
            }
        }

        case MINUS_ITEM:{
            const oldItems = state.items[action.id].items
            const newObjItems = oldItems.length > 1 ? state.items[action.id].items.slice(1) : oldItems; 

            const newItems = {
                ...state.items,
                [action.id]:{
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }

            const count = Object.keys(newItems).reduce((sum,key)=> newItems[key].items.length + sum,0)
            const totalPrice = Object.keys(newItems).reduce((sum,key)=> newItems[key].totalPrice + sum,0)
            
            return {
                ...state,
                items: newItems,
                count,
                totalPrice
            } 
        }
        case ORDER_DELIVERY:{
            return {
                ...state,
                modal: !state.modal
            }
        }
            
        default:
            return state
    }
}