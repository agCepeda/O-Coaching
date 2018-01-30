import { ACTIONS } from './actions'

const initialStates = {
	session: null
}

export const session = (state = initialStates.session, action) => {
	switch (action.type) {
		case ACTIONS.AUTH_SUCCESS:
			return action.session
		case ACTIONS.AUTH_FAILS:
			return null
		default:
			return state
	}
}

