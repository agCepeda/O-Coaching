import axios from 'axios';

class Api {

	constructor(baseUrl, authToken) {
	  this.state = {};
	  this.baseUrl = baseUrl;
	  this.authToken = authToken;

	  buildClient();
	}

	buildClient() {
		this.httpClient = axios.create({
			baseUrl: this.baseUrl,
			headers: {
				"Authorization": this.authToken,
			}
		})
	}

	checkSession(callback) {
		this.httpClient
			.get('auth/check-session')
			.then(response => callback(response, null))
			.catch(error => callback(null, error));
	}

	login(username, password, callback) {
		this.httpClient
			.post('auth/login', {
				username: username,
				password: password
			})
			.then(response => {

			})
			.catch(error => {

			});
	}
}

export default Api;