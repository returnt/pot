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

})


//senâ email controller
starter.controller('mainController', function($http, $scope){
    // on-click send email
    $scope.submit = function(email, tel, cost){
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



starter.controller('area', function($scope ,$ionicModal){
    $ionicModal.fromTemplateUrl('view/parameters_of_the_ceiling_1.html',function(modal){
        $scope.taskModal = modal;
    },{
        scope: $scope,
        animation : 'slide-in-right'
    });
    $scope.openTask = function(){
        $scope.taskModal.show();
    }
    $scope.closeTask = function(){
        $scope.taskModal.hide();
    }
})

.controller('vstavka', function($scope ,$ionicModal){
    $ionicModal.fromTemplateUrl('view/index3.html',function(modal){
        $scope.taskModal = modal;
    },{
        scope: $scope,
        animation : 'slide-in-right'
    });
    $scope.openTask = function(){
        $scope.taskModal.show();
    }
    $scope.closeTask = function(){
        $scope.taskModal.hide();
    }
})

.controller('dopparametr', function($scope ,$ionicModal){
    $ionicModal.fromTemplateUrl('view/parameters_of_the_ceiling_4.html',function(modal){
        $scope.taskModal = modal;
    },{
        scope: $scope,
        animation : 'slide-in-right'
    });
    $scope.openTask = function(){
        $scope.taskModal.show();
    }
    $scope.closeTask = function(){
        $scope.taskModal.hide();
    }
})

.controller('pricelast', function($scope ,$ionicModal){
    $ionicModal.fromTemplateUrl('view/parameters_of_the_ceiling_5.html',function(modal){
        $scope.taskModal = modal;
    },{
        scope: $scope,
        animation : 'slide-in-right'
    });
    $scope.openTask = function(){
        $scope.taskModal.show();
    }
    $scope.closeTask = function(){
        $scope.taskModal.hide();
    }
        $scope.array1 = [];
        $scope.array2 = [];
        $scope.array3 = [];
        $scope.array4 = [];
        $scope.array5 = [];
        $scope.array6 = [];

        for (var i = 1; i <= 30; i++) {
            $scope.array1.push(i);
            $scope.array2.push(i);
            $scope.array3.push(i);
            $scope.array4.push(i);
            $scope.array5.push(i);
            $scope.array6.push(i);
        }

        $scope.log = function(ruslan) {
            console.log(ruslan);
        }
})
