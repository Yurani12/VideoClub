'use strict';

angular.module("videoClubApp")
.factory('AuthService',AuthService);

function AuthService($auth,$state, localStorageService){
	var Auth = {
		login:login,
		isAuthenticated:isAuthenticated,
		logout:logout,
		isAdmin:isAdmin,
		getRoles: getRoles,
		getIdUser: getIdUser
	};

	function login(user,collback){
		$auth.login(user)
		.then(response => {
			console.log("Login ok",response);
			$state.go('main');
			localStorageService.set('idUsuarioLogeado',Auth.getIdUser());
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
 /* Toma todos los roles*/
 function getRoles(){
  if (Auth.isAuthenticated()) {
 	 return $auth.getPayload().roles
  }else {
 	 return false;
  }
 }

 function getIdUser() {
	 if (Auth.isAuthenticated()) {
		return $auth.getPayload().sub
	 }else {
		return false;
	 }
 }

function isAdmin(){
	if(Auth.isAuthenticated()){
		if($auth.getPayload().roles.indexOf("ADMIN") !== -1){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

	return Auth;

}
