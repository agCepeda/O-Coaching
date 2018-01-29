import { ACTIONS } from './actions'

const initialStates = {
	session: {
		token: null
	},
	user: null
}

export const sessionReducer = (state = initialStates.settings, action) => {
	switch (action.type) {
		case ACTIONS.SESSION_SUCCESS:
			return Object.assign({}, state, { token: action.sessionToken })
		default:
			return state
	}
}

export const userReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.UPDATE_USER:
			return Object.assign({}, {}, action.user)
		default:
			return state
	}	
}