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
<<<<<<< HEAD
})

=======
});

starter.controller('mainController', function($http, $scope){

    $scope.submit = function(email, tel, cost){
        $http.post('http://pot.returnt.ru/mail.php', {
            submits: true, mail: email,
            tel: tel, cost: cost
            })
            .success(function(data){
                console.log(data);
            }).error(function(data){
                console.log(data);
            });
    };
});
>>>>>>> d46a25930cfe72155602e95d287e02e6879f301b
