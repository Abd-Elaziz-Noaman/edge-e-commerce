import { combineReducers } from 'redux'
import authedUser from './authedUser'
import items from './items'

export default combineReducers({
    authedUser,
    items
})