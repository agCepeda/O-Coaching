export const ACTIONS = {
	SESSION_SUCCESS: 'SESSION_SUCCESS',
	SESSION_FAILS: 'SESSION_FAILS',
	UPDATE_USER: 'UPDATE_USER'
}

export const actions = {
	sessionSuccess: (sessionToken) => ({ type: ACTIONS.SESSION_SUCCESS, sessionToken }),
	sessionFails: () => ({ type: ACTIONS.SESSION_SUCCESS }),
	updateUser: (user) => ({ type: ACTIONS.UPDATE_USER, user })
}