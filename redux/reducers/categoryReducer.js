let initialState = 'Все'

export default function categoryReducer(state = initialState,action){
    switch(action.type){
        case 'CHANGE_CATEGORY':
            return action.category
        default:
            return state
    }
}