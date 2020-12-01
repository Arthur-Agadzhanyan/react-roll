import {ADD_TO_COST,USE_LOCALHOST} from '../constants'

let initialState = 0

if (typeof window !== "undefined") {
    if(localStorage.getItem('cost')){
        initialState = JSON.parse(localStorage.getItem('cost'))
    }
}

export default function costReducer(state = initialState,action){
    switch(action.type){
        case ADD_TO_COST:
            return action.cost
        case USE_LOCALHOST:
            return action.localState
        default:
            return state
    }
}