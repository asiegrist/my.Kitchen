'use strict';

console.log('hey');
angular.module('myKitchen')
  .directive('loginAvailable', ['Users', '$q', function(Users, $q) {
    console.log('hey2');
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function($scope, $element, $attrs, $controller) {
        console.log($scope);
        var ngModelController = $controller;

        ngModelController.$asyncValidators.used =  function(modelValue, viewValue) {
          var value = modelValue || viewValue;

          return Users.checkAvailability({login: value}).then(function() {
            console.log('success');
            return true;
          }, function() {
            console.log('error');
            return $q.reject();
          })
        };
      }
    };
  }])
;
