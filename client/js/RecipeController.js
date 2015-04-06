'use strict';

angular.module('myKitchen')
  .controller('RecipeController', ['$scope', 'Recipes', function($scope, Recipes) {
    $scope.recipes = Recipes.query();

    $scope.orderProp = 'age';
  }])
  .controller('RecipeDetailController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, Recipes) {
    $scope.recipe = Recipes.get({id: $routeParams.recipeId});
  }])
;