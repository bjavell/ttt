'use strict';

var app = angular.module('myApp', [
  "ngRoute",
  "mobile-angular-ui",
  "ngMaterial"
])
// .directive('updateSize',['$window', function ($window) {
// console.log((5 < 0.8) ? 1 : (6 < 0.9) ? 2 : 3);
//    return {
//        restrict: 'A',
//        require: '^mdVirtualRepeatContainer',
//        link: function(scope, element, attributes, mdVirtualRepeatContainer) {
//            var footer = 45;
//            function getHeight() {
//              var height = $window.innerHeight - (element[0].getBoundingClientRect().top + footer);
//              angular.element(element).css('height', height + 'px');
//              return height;
//            }
//            function onResize() {
//              mdVirtualRepeatContainer.setSize_(getHeight());
//            }
//            getHeight();
//            angular.element($window).on('resize', onResize);
//        }
//      };
//    }
// ])
.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
  $routeProvider.when('/', {
      templateUrl: "home.html"
  });
  $routeProvider.when('/categories', {
    templateUrl: 'categories.html'
  });
  $routeProvider.when('/settings', {
    templateUrl: 'settings.html'
  });
});

app.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/washedout.png';
  $scope.feeds = [
   {
     'src' : 'assets/mstche.png',
    'imgSize': 'Big',
    'srcSite' : 'ABS'
  },{
    'imgSize': 'None',
    'srcSite' : 'GMA'
  },{
    'imgSize': 'None',
    'srcSite' : 'CNN'
  },{
    'src' : 'assets/mstche.png',
    'imgSize': 'Small',
    'srcSite' : 'TV5'
  },{
    'src' : 'assets/mstche.png',
    'imgSize': 'Small',
    'srcSite' : 'PORNHUB'
  },{
     'src' : 'assets/mstche.png',
    'imgSize': 'Big',
    'srcSite' : 'YOUJIZZ'
  }
];

$scope.items = [];
for (var i = 0; i < 10; i++) {
  $scope.items.push(i);
}
});

app.controller('MainController', ['$scope', '$location',
    function($scope, $location) {
      $scope.home = function() { $location.path('/'); }
      $scope.categories = function() { $location.path('/categories'); }
      $scope.settings = function() { $location.path('/settings'); }
    }
]);

app.controller('AppCtrl1', function($scope) {
  var COLORS = [
    '#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350',
    '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c',
    '#ff8a80', '#ff5252', '#ff1744', '#d50000', '#f8bbd0',
    '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60'];

  this.colorTiles = (function() {
    var tiles = [];
    for (var i = 0; i < 20; i++) {
      tiles.push({
        color: randomColor()
      });
    }
    return tiles;
  })();

  function randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  function randomSpan() {
    var r = Math.random();
    return (r < 0.8) ? 1 : (r < 0.9) ? 2 : 3;

    // if (r < 0.8) {
    //   return 1;
    // } else if (r < 0.9) {
    //   return 2;
    // } else {
    //   return 3;
    // }
  }
});


app.controller('ListCtrl', function($scope, $mdDialog) {
  $scope.toppings = [
    { name: 'Pepperoni', wanted: true },
    { name: 'Sausage', wanted: false },
    { name: 'Black Olives', wanted: true },
    { name: 'Green Peppers', wanted: false }
  ];

  $scope.settings = [
    { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true },
    { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'device:bluetooth', enabled: false },
  ];

  $scope.messages = [
    {id: 1, title: "Message A", selected: false},
    {id: 2, title: "Message B", selected: true},
    {id: 3, title: "Message C", selected: true},
  ];

  $scope.people = [
    { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
    { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
    { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
  ];

  $scope.goToPerson = function(person, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .textContent('Inspect ' + person)
        .ariaLabel('Person inspect demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

  $scope.navigateTo = function(to, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .textContent('Imagine being taken to ' + to)
        .ariaLabel('Navigation demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

  $scope.doPrimaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Primary Action')
        .textContent('Primary actions can be used for one click actions')
        .ariaLabel('Primary click demo')
        .ok('Awesome!')
        .targetEvent(event)
    );
  };

  $scope.doSecondaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Secondary Action')
        .textContent('Secondary actions can be used for one click actions')
        .ariaLabel('Secondary click demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

});
