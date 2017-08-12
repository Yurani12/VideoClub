'use strict';

angular.module("videoClubApp")
.factory('AuthService',AuthService);

AuthService.$inject  = ['$auth','$state'];
function AuthService($auth,$state){
	var Auth = {
		login:login,
		isAuthenticated:isAuthenticated,
		logout:logout
	};

	function login(user,collback){
		$auth.login(user)
		.then(response => {
			console.log("Login ok",response);

			$state.go('main');
		})
		.catch(err =>{
			console.log("Error de login");
			$state.go('login');
		})
	}

function logout(){
	if (Auth.isAuthenticated()) {
		$auth.logout()
		.then(response => {
			$state.go('main');
			console.log('salida ok');
		})
	}
}
function isAuthenticated(){
	if($auth.isAuthenticated()){
		return true;
	}else{
		return false;
	}
}//final function auth

	return Auth;

}
