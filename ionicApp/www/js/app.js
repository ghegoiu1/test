angular.module('projectConn', ['ionic', 'projectConn.controllers'])  

.constant('ApiEndpoint',{
  url: 'http://localhost:8100/api'
})
// Set origin to proxy through to the backend 

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  
  //Added state for Homepage
  .state('app.home',{
    url: '/home',
    views: {
        'menuContent': {
            templateUrl: 'templates/appHome.html',
            controller: 'HomeCtrl'
        }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home'); 
});
