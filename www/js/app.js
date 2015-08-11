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

    .controller('vstavka', function($scope ,$ionicModal, $timeout){
        $ionicModal.fromTemplateUrl('view/index3.html',function(modal){
            $scope.taskModal = modal;
        },{
            scope: $scope,
            animation : 'slide-in-right'
        });
        $scope.openTask = function(length, width, area){
            $scope.lengthh = length;
            $scope.width = width;
            $scope.area = area;
            if(length != null && width != null || area != null){

                $scope.taskModal.show();

            } else {
                $scope.attention = true;
                $scope.att = function(){
                    $scope.attention = !$scope.attention;
                }
                $timeout(function(){
                    $scope.attention = false;
                }, 1250);
            }
        };

        $scope.closeTask = function(){
            $scope.taskModal.hide();
        }
    })

.controller('dopparametr', function($scope ,$ionicModal, $timeout){

        $scope.material = [
            {id: 1, value: 10, name: 'Матовое (1,5 м.) белый'},
            {id: 2, value: 20, name: 'Матовое (1,5 м.) цветной'},
            {id: 3, value: 30, name: 'Матовое (1,5 м.) сатиновое'},
            {id: 4, value: 40, name: 'Матовое (1,5 м.) белый'},
            {id: 5, value: 50, name: 'Матовое (1,5 м.) цветной'},
            {id: 6, value: 60, name: 'Матовое (1,5 м.) белый'},
            {id: 7, value: 70, name: 'Матовое (1,5 м.) цветной'},
            {id: 8, value: 80, name: 'Матовое (1,5 м.) белый'},
            {id: 9, value: 90, name: 'Матовое (1,5 м.) сатиновое'},
            {id: 10, value: 100, name: 'Матовое (1,5 м.) белый'}
        ];

        $scope.vstavkaBaget = [
            {id: 1, value: 100, name: 'Белая'},
            {id: 2, value: 200, name: 'В цвет полотна'}
        ];
    $ionicModal.fromTemplateUrl('view/parameters_of_the_ceiling_4.html',function(modal){
        $scope.taskModal = modal;
    },{
        scope: $scope,
        animation : 'slide-in-right'
    });
    $scope.openTask = function(materialVal, vstavkaVal){
        $scope.materialVal = materialVal;
        $scope.vstavkaVal = vstavkaVal;
        if(materialVal != null && vstavkaVal != null){

            $scope.taskModal.show();

        } else {
            $scope.attention = true;
            $scope.att2 = function(){
                $scope.attention = !$scope.attention;
            }
            $timeout(function(){
                $scope.attention = false;
            }, 1250);
        }
    }
    $scope.closeTask = function(){
        $scope.taskModal.hide();
    }
})

.controller('pricelast', function($scope ,$ionicModal){

        $scope.array1 = [
            {id: 1, value: 35, name: 4},
            {id: 2, value: 82, name: 6},
            {id: 3, value: 35, name: 7},
            {id: 4, value: 82, name: 8},
            {id: 5, value: 35, name: 9},
            {id: 6, value: 82, name: 10},
            {id: 7, value: 35, name: 11},
            {id: 8, value: 82, name: 12},
            {id: 9, value: 35, name: 13},
            {id: 10, value: 82, name: 14},
            {id: 11, value: 35, name: 15},
            {id: 12, value: 82, name: 16},
            {id: 13, value: 35, name: 17},
            {id: 14, value: 82, name: 18},
            {id: 15, value: 35, name: 19},
            {id: 16, value: 82, name: 20},
            {id: 17, value: 35, name: 21},
            {id: 18, value: 82, name: 22},
            {id: 19, value: 35, name: 23},
            {id: 20, value: 82, name: 24},
            {id: 21, value: 35, name: 25},
            {id: 22, value: 82, name: 26},
            {id: 23, value: 35, name: 27},
            {id: 24, value: 82, name: 28},
            {id: 25, value: 35, name: 29},
            {id: 26, value: 82, name: 30},
            {id: 27, value: 35, name: 31},
            {id: 28, value: 82, name: 32},
            {id: 29, value: 35, name: 33},
            {id: 30, value: 82, name: 34},

        ];
        $scope.array2 = [
            {id: 1, value: 35, name: 4},
            {id: 2, value: 82, name: 6},
            {id: 3, value: 35, name: 7},
            {id: 4, value: 82, name: 8},
            {id: 5, value: 35, name: 9},
            {id: 6, value: 82, name: 10},
            {id: 7, value: 35, name: 11},
            {id: 8, value: 82, name: 12},
            {id: 9, value: 35, name: 13},
            {id: 10, value: 82, name: 14},
            {id: 11, value: 35, name: 15},
            {id: 12, value: 82, name: 16},
            {id: 13, value: 35, name: 17},
            {id: 14, value: 82, name: 18},
            {id: 15, value: 35, name: 19},
            {id: 16, value: 82, name: 20},
            {id: 17, value: 35, name: 21},
            {id: 18, value: 82, name: 22},
            {id: 19, value: 35, name: 23},
            {id: 20, value: 82, name: 24},
            {id: 21, value: 35, name: 25},
            {id: 22, value: 82, name: 26},
            {id: 23, value: 35, name: 27},
            {id: 24, value: 82, name: 28},
            {id: 25, value: 35, name: 29},
            {id: 26, value: 82, name: 30},
            {id: 27, value: 35, name: 31},
            {id: 28, value: 82, name: 32},
            {id: 29, value: 35, name: 33},
            {id: 30, value: 82, name: 34},
        ];
        $scope.array3 = [
            {id: 1, value: 35, name: 4},
            {id: 2, value: 82, name: 6},
            {id: 3, value: 35, name: 7},
            {id: 4, value: 82, name: 8},
            {id: 5, value: 35, name: 9},
            {id: 6, value: 82, name: 10},
            {id: 7, value: 35, name: 11},
            {id: 8, value: 82, name: 12},
            {id: 9, value: 35, name: 13},
            {id: 10, value: 82, name: 14},
            {id: 11, value: 35, name: 15},
            {id: 12, value: 82, name: 16},
            {id: 13, value: 35, name: 17},
            {id: 14, value: 82, name: 18},
            {id: 15, value: 35, name: 19},
            {id: 16, value: 82, name: 20},
            {id: 17, value: 35, name: 21},
            {id: 18, value: 82, name: 22},
            {id: 19, value: 35, name: 23},
            {id: 20, value: 82, name: 24},
            {id: 21, value: 35, name: 25},
            {id: 22, value: 82, name: 26},
            {id: 23, value: 35, name: 27},
            {id: 24, value: 82, name: 28},
            {id: 25, value: 35, name: 29},
            {id: 26, value: 82, name: 30},
            {id: 27, value: 35, name: 31},
            {id: 28, value: 82, name: 32},
            {id: 29, value: 35, name: 33},
            {id: 30, value: 82, name: 34},
        ];

        $scope.array4 = [
            {id: 1, value: 35, name: 4},
            {id: 2, value: 82, name: 6},
            {id: 3, value: 35, name: 7},
            {id: 4, value: 82, name: 8},
            {id: 5, value: 35, name: 9},
            {id: 6, value: 82, name: 10},
            {id: 7, value: 35, name: 11},
            {id: 8, value: 82, name: 12},
            {id: 9, value: 35, name: 13},
            {id: 10, value: 82, name: 14},
            {id: 11, value: 35, name: 15},
            {id: 12, value: 82, name: 16},
            {id: 13, value: 35, name: 17},
            {id: 14, value: 82, name: 18},
            {id: 15, value: 35, name: 19},
            {id: 16, value: 82, name: 20},
            {id: 17, value: 35, name: 21},
            {id: 18, value: 82, name: 22},
            {id: 19, value: 35, name: 23},
            {id: 20, value: 82, name: 24},
            {id: 21, value: 35, name: 25},
            {id: 22, value: 82, name: 26},
            {id: 23, value: 35, name: 27},
            {id: 24, value: 82, name: 28},
            {id: 25, value: 35, name: 29},
            {id: 26, value: 82, name: 30},
            {id: 27, value: 35, name: 31},
            {id: 28, value: 82, name: 32},
            {id: 29, value: 35, name: 33},
            {id: 30, value: 82, name: 34},
        ];
        $scope.array5 = [
            {id: 1, value: 35, name: 4},
            {id: 2, value: 82, name: 6},
            {id: 3, value: 35, name: 7},
            {id: 4, value: 82, name: 8},
            {id: 5, value: 35, name: 9},
            {id: 6, value: 82, name: 10},
            {id: 7, value: 35, name: 11},
            {id: 8, value: 82, name: 12},
            {id: 9, value: 35, name: 13},
            {id: 10, value: 82, name: 14},
            {id: 11, value: 35, name: 15},
            {id: 12, value: 82, name: 16},
            {id: 13, value: 35, name: 17},
            {id: 14, value: 82, name: 18},
            {id: 15, value: 35, name: 19},
            {id: 16, value: 82, name: 20},
            {id: 17, value: 35, name: 21},
            {id: 18, value: 82, name: 22},
            {id: 19, value: 35, name: 23},
            {id: 20, value: 82, name: 24},
            {id: 21, value: 35, name: 25},
            {id: 22, value: 82, name: 26},
            {id: 23, value: 35, name: 27},
            {id: 24, value: 82, name: 28},
            {id: 25, value: 35, name: 29},
            {id: 26, value: 82, name: 30},
            {id: 27, value: 35, name: 31},
            {id: 28, value: 82, name: 32},
            {id: 29, value: 35, name: 33},
            {id: 30, value: 82, name: 34},
        ];
        $scope.array6 = [
            {id: 1, value: 35, name: 4},
            {id: 2, value: 82, name: 6},
            {id: 3, value: 35, name: 7},
            {id: 4, value: 82, name: 8},
            {id: 5, value: 35, name: 9},
            {id: 6, value: 82, name: 10},
            {id: 7, value: 35, name: 11},
            {id: 8, value: 82, name: 12},
            {id: 9, value: 35, name: 13},
            {id: 10, value: 82, name: 14},
            {id: 11, value: 35, name: 15},
            {id: 12, value: 82, name: 16},
            {id: 13, value: 35, name: 17},
            {id: 14, value: 82, name: 18},
            {id: 15, value: 35, name: 19},
            {id: 16, value: 82, name: 20},
            {id: 17, value: 35, name: 21},
            {id: 18, value: 82, name: 22},
            {id: 19, value: 35, name: 23},
            {id: 20, value: 82, name: 24},
            {id: 21, value: 35, name: 25},
            {id: 22, value: 82, name: 26},
            {id: 23, value: 35, name: 27},
            {id: 24, value: 82, name: 28},
            {id: 25, value: 35, name: 29},
            {id: 26, value: 82, name: 30},
            {id: 27, value: 35, name: 31},
            {id: 28, value: 82, name: 32},
            {id: 29, value: 35, name: 33},
            {id: 30, value: 82, name: 34},
        ];

    $ionicModal.fromTemplateUrl('view/parameters_of_the_ceiling_5.html',function(modal){
        $scope.taskModal = modal;
    },{
        scope: $scope,
        animation : 'slide-in-right'
    });
    $scope.openTask = function(array1, array2, array3, array4, array5){

        costPot($scope);
        $scope.array1 = array1;
        $scope.array2 = array2;
        $scope.array3 = array3;
        $scope.array4 = array4;
        $scope.array5 = array5;
        $scope.taskModal.show();
    }
    $scope.closeTask = function(){
        $scope.taskModal.hide();
    }

})
.controller('mainController', function($http, $scope, $timeout){

        // on-click send email
        $scope.submit = function(email, tel, cost) {

            if (email != null && tel != null) {
                console.log(email);
                //URL send email
                $http.post('http://pot.returnt.ru/mail.php', {
                    submits: true, mail: email,
                    tel: tel, cost: cost
                }).success(function (data) {
                    //success post request
                    console.log(data);
                }).error(function (data) {
                    //error
                    console.log(data);
                });

            } else {
                console.log("popa");
                // "true" means attention window will be shown
                $scope.attention5 = true;
                // $timeout close attention window automatically within 1.250 second
                $timeout(function () {
                    $scope.attention5 = false;
                }, 1250);
            };
        }
});


var costPot = function($scope){

    $scope.perimetr = 2 * ($scope.lengthh + $scope.width);
    $scope.area =  $scope.lengthh * $scope.width;
    $scope.materials = $scope.material[$scope.materialVal-1].name;
    $scope.vstavkaBagetView = $scope.vstavkaBaget[$scope.vstavkaVal-1].name;

    if($scope.perimetr != null){
        $scope.costss = $scope.perimetr * (55) + $scope.material[$scope.materialVal-1].value + $scope.vstavkaBaget[$scope.vstavkaVal-1].value;
    }else{
        $scope.costss = $scope.area * (55) + $scope.material[$scope.materialVal-1].value + $scope.vstavkaBaget[$scope.vstavkaVal-1].value;
    }

}


