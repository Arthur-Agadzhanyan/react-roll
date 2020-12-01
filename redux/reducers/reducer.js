import {combineReducers} from "redux"
import main from "./rootReducer.js"
import money from './moneyReducer'
import sort from './sortReducer'
import category from './categoryReducer'
import basket from './basketReducer'

export default combineReducers({
    basket,
    money,
    sort,
    category
})