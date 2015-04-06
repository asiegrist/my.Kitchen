'use strict';

angular.module('myKitchen')
  .service('Users', ['$resource', function($resource) {
    return $resource('api/users/:id', {id: '@id'}, {
      checkAvailability: {
        url: 'api/users/check-availability/:name.json',
        method: 'GET'
      }
    });
  }])
;