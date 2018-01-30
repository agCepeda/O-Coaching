import axios from 'axios'
import base64 from 'base-64'

class AuthApi {

	authEndpoint = "https://accounts.spotify.com/api/token"

	constructor(clientId, clientSecret) {
		this.state = {}

		this.clientId = clientId
		this.clientSecret = clientSecret
	}

	requestToken(callback) {
		axios.post(
			this.authEndpoint,
			'grant_type=client_credentials',
			{
				headers: {
					'Authorization': 'Basic ' + base64.encode(this.clientId + ':' + this.clientSecret),
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.then(response => callback(response, false))
			.catch(error => callback(response, true))
	}
}

class Api {

	baseUrl = "https://api.spotify.com/"
 	
 	constructor(accessToken, tokenType) {
		this.state = {}
		this.accessToken = accessToken
		this.tokenType = tokenType

		this.buildApi()
	}

	buildApi() {
		this.httpClient = axios.create({
			baseURL: this.baseUrl,
			timeout: 1000,
			headers: {
				'Authorization': this.tokenType + ' ' + this.accessToken,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
	}

	browseCategories(country, limit, offset, callback) {
		var params = {};

		if (country) params.country = country
		
		if (limit) params.limit = limit

		if (offset) params.offset = offset

		this.httpClient
			.get('v1/browse/categories', {
				params: params
			})
			.then(response => callback(response.data, false))
			.catch(error => callback(error, true))
	}


}


export { Api as Api, AuthApi as AuthApi }