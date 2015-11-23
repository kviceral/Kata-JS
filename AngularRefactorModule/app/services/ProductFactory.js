/*
	A DAO or a base class whose job is to simply call appropriate ws
*/
(function() {
    var ProductFactory = function($http) {
        
        //Todo: Refactor to use Angular Constants
        var API_CONSTANTS = {
            BASE_URL : "https://supercoolwebservice.com/api/",
            METHODS : {
                LOAD_PRODUCT : "product",
				LOAD_REVIEWS : "productReviews"
            }
        };
        
        var factory = {};

        factory.loadProduct = function(productId) {
            return $http.get(API_CONSTANTS.BASE_URL + 
					API_CONSTANTS.METHODS.LOAD_PRODUCT + "/" + 
					productId
                );
        };
		
		factory.loadReviews = function(productId) {
            return $http.get(API_CONSTANTS.BASE_URL + 
					API_CONSTANTS.METHODS.LOAD_REVIEWS + "/" + 
					productId
                );
        };

        return factory;
    };

    ProductFactory.$inject = ['$http'];
    angular.module('KataApp').factory('ProductFactory', ProductFactory);
}());
