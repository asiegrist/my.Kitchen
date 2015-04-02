'use strict';

var recipeControllers = angular.module('recipeControllers', []);
var userControllers = angular.module('userControllers', []);

recipeControllers.controller('RecipeListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('api/recipe').success(function(data) {
      $scope.recipes = data.splice(0, 5);
    });

    $scope.orderProp = 'age';
  }
]);

recipeControllers.controller('RecipeDetailCtrl', [
  '$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('api/recipe/' + $routeParams.recipeId).success(function(data) {
      $scope.recipe = data;
    });
  }
]);

userControllers.controller('UserRegistrationCtrl', ['$scope',
	function($scope) {
		this.createUser = function() {
			if($scope.registrationForm.$valid) {
				if(!this.gender){
					this.gender = "female";
				}
				if(!this.newsletter) {
					this.newsletter=false;
				}
				alert("Merci de vous être inscrit");
			}
			else {
				alert("Veuillez remplir tous les champs obligatoire.");
			}
		};
	}
]);

userControllers.controller('UserConnectionCtrl', ['$scope',
	function($scope) {
		
	}
]);