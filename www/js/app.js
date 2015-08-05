// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();

    }
  });
});

//senâ email controller
starter.controller('mainController', function($http, $scope){
    // on-click send email
    $scope.submit = function(email, tel, cost, select){
        //URL send email
        $http.post('http://pot.returnt.ru/mail.php', {
            submits: true, mail: email,
            tel: tel, cost: cost
            }).success(function(data){
            //success post request
                console.log(data);
            }).error(function(data){
            //error
                console.log(data);
            });
    };
});

starter.controller('tesst', function($scope, $ionicModal){
    $ionicModal.fromTemplateUrl('index2.html', function(modal){
        $scope.taskModal = modal;
    },{
        scope: $scope,
        animation: 'slide-in-left'

    });

    $scope.openTask = function(){
        $scope.taskModal.show();
    }

    $scope.closeTask = function(){
        $scope.taskModal.hide();
    }

});
