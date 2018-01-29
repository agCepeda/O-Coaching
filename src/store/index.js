import { createStore, combineReducers } from 'redux'
import { sessionReducer, userReducer } from './reducers'

const rootReducer = combineReducers({
	sessionReducer,
	userReducer
})

export default createStore(rootReducer)