/*
	A "Business" or Orchestration Layer on top of the API caller. We wrap business functions around a webservice.
*/
(function() {
    var ProductService = function($log, $q, ProductFactory) {

        this.getProductDetails = function (id) {
            
            var deferred = $q.defer();
			var productDetails, productReviews;
            
			var getProduct = ProductFactory.loadProduct(id)
                    .success(function(data) {      
                        productDetails = data;
                    })
                    .error(function(data, status, headers, config) {
                        $log.error(data.error + ' ' + status);
                    });
					
			var getProductReviews = ProductFactory.loadProduct(id)
                    .success(function(data) {      
                        productReviews = data;
                    })
                    .error(function(data, status, headers, config) {
                        $log.error(data.error + ' ' + status);
                    });								
			
			$q.all([getProduct,getProductReviews])
				.then(function(string) {
					var product= {};
					
					product.product = productDetails;
					product.reviews = productReviews;

					deferred.resolve(product);
					return deferred.promise; 
			});

        };
    };

    angular.module('KataApp').service('ProductService', ProductService);
}());
