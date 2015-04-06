'use strict';

angular.module('myKitchen')
  .service('Recipes', ['$resource', function($resource) {
    return $resource('api/recipes/:id', {id:'@id'});
  }])
;