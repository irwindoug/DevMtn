var app = angular.module('app');

app.service('DataService', function () {
	return {
		data: [
			{ name: 'John', description: 'John loves cake'},
			{ name: 'Sara', description: 'Sara loves pie'},
			{ name: 'Joe', description: 'Joe loves cookies'},
			{ name: 'Michelle', description: 'Michelle loves brownies'},
			{ name: 'Dave', description: 'Dave loves Dave'}
		]
	}
});