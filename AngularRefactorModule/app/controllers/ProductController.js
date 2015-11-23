(function() {

    var ProductController = function ($scope, $log, ProductService) {
		var vm = this;

		$scope.loadProduct = function(id){
			vm.loadProduct(id);
		};
		
		loadProduct(1);
    };

	ProductController.prototype.loadProduct = function(id){
		var promise = ProductService.getProductDetails(id);
		promise.then(function(product) {               
			vm.product = product;
		}, function(reason) {
			//update UI with error message
		}, function(update) {
			//for any updates, maybe a loading message
		});     
	};

    ProductController.$inject = ['$scope','$log', 'ProductService'];
    angular.module('KataApp').controller('ProductService', ProductService);

}());