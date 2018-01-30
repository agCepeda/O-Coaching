import { createStore, combineReducers } from 'redux'
import { session } from './reducers'

const rootReducer = combineReducers({
	session
})

export default createStore(rootReducer)