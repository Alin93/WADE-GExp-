var app = angular.module('hello');
app.controller('register', ['$scope', '$http', '$window', '$rootScope', function ($scope, $http, $window, $rootScope) {

	this.showError = false;
	
	this.register = function(){
		if(this.username === undefined || this.password === undefined){
			this.showError = true;
			this.errorMessage = "Please complete the username and the password.";
		}
		else if(this.password !== this.confirmPassword){
			this.showError = true;
			this.errorMessage = "Passwords don't match!";
		}
		else if(validateEmail(this.email) === false){
			this.showError = true;
			this.errorMessage = "Please provide a valid e-mail adres!";
		}
		else{
			this.showError = false;
			console.log("Login successful: " + this.username + " " + this.password)
		}
	}
	
	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}
	
}]);