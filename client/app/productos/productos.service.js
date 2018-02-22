
'use strict';

function productosService($resource,API){
	return $resource(API + '/api/productos/:id',{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	});
}

productosService.$inject = ['$resource','API'];
angular.module('videoClubApp')
  .factory('productosService', productosService);
