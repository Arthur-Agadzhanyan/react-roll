import { SORT_BY_ALPHABET, SORT_BY_COST, SORT_BY_POPULARITY,SET_ROLLS } from "../constants"

let initialState = []

if (typeof window !== "undefined") {
    if(localStorage.getItem('sort-rolls')){
        initialState = JSON.parse(localStorage.getItem('sort-rolls'))
    }
}

export default function sortReducer(state = initialState,action){
    switch(action.type){
        case SET_ROLLS:
            return action.state
        case SORT_BY_COST: 
            let sorted = action.state.sort((a,b)=> a.cost > b.cost ? action.a : action.b) 
            return [...sorted]
        case SORT_BY_ALPHABET:
            let sortedArray = action.state.sort((a,b)=> a.title.toUpperCase() > b.title.toUpperCase() ? action.a : action.b)
            return [...sortedArray]
        case SORT_BY_POPULARITY: 
            let sortedPopular = action.state.sort((a,b)=> a.popularity > b.popularity ? -1 : 1) 
            return [...sortedPopular]
        default:
            return state
    }
}

