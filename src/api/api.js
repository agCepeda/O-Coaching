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
	}
}

export default Api;