'use strict';

angular.module('myKitchen')
  .controller('UserRegistrationController', ['$scope', '$routeParams', '$http', '$location', function($scope, $routeParams, $http, $location) {
    /*this.createUser = function() {
      var nickname = this.nickname;

      function checkNickname(nickname) {
        if(nickname) {
          $http.get('users/' + nickname + '.json').success(function(data) {
            if(data.nickname == nickname){
              $scope.registrationForm.nickname.$error.used = true;
              $scope.registrationForm.$valid = false;
              $scope.registrationForm.nickname.$invalid = true;
              $scope.registrationForm.nickname.$valid = false;
            } else {
              $scope.registrationForm.nickname.$error.used = false;
              $scope.registrationForm.nickname.$invalid = false;
              $scope.registrationForm.nickname.$valid = true;             
            } 
          }).error(function(){
            console.log('deco');
            $scope.registrationForm.nickname.$error.used = false; // Test purpose only
            $scope.registrationForm.nickname.$invalid = false;
            $scope.registrationForm.nickname.$valid = true;
          });
        }
      }
      //var check = checkNickname(nickname);

        console.log(checkNickname(nickname));
      if ($scope.registrationForm.$valid && !$scope.registrationForm.nickname.$error.used) {
        if(!this.gender){
          this.gender = 'female';
        }
        if(!this.newsletter) {
          this.newsletter=false;
        }
        alert('Merci de vous être inscrit');
        $location.path('/user/profile/' + this.nickname);
        console.log(angular.toJson(this, true));
      }
      else {
        alert("Veuillez remplir tous les champs obligatoire.");
      }
    };*/
  }])
  /*.controller('UserConnectionController', ['$scope', '$routeParams', '$http', '$location', function($scope, $routeParams, $http, $location) {
    this.login = function() {
      var nickname = this.nickname;
      var password = this.password;
      
      if(nickname && password) {
        $http.get('users/' + nickname + '.json').success(function(data) {
          if(angular.lowercase(data.nickname) == angular.lowercase(nickname) && data.password == password){
            console.log('ok');
            $scope.connectionForm.$error.combination = false;
            $location.path('/user/profile/' + nickname);
          } else {
            console.log('nok');
            $scope.connectionForm.$error.combination = true; 
          } 
        }).error(function(){
          console.log('deco');
          $scope.connectionForm.$error.combination = true; // Test purpose only
        });
      }
      console.log('out');
    }
  }])
  .controller('UserProfileController', ['$scope', '$routeParams', function($scope, $routeParams) {
    console.log($routeParams);
    this.nickname = $routeParams.userNickname;
  }])*/
;