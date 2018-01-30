export const ACTIONS = {
	AUTH_SUCCESS: 'AUTH_SUCCESS',
	AUTH_FAILS: 'AUTH_FAILS',
}

export const actions = {
	authSuccess: (accessToken, tokenType) => {
		console.log(accessToken, tokenType)
		return {
			type: ACTIONS.AUTH_SUCCESS,
			session: { accessToken, tokenType }
		}
	},

	authFails: () => ({ type: ACTIONS.AUTH_SUCCESS })
}