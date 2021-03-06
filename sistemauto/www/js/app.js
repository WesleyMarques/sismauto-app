(function() {

    'use strict';

    angular.module('sistemauto.controller', []);

    angular.module('sistemauto.service', []);

    var app = angular.module('sistemauto', [
        'ionic','ionic.service.core',
        'ngCordova',
        'ionic-material',
        'sistemauto.service',
        'sistemauto.controller'
    ]);

    app.run(function($ionicPlatform, userProfileService) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }

            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            var push = new Ionic.Push({
				"debug": true
  			});

  			push.register(function(token) {
                console.log('token abaixo');
                console.log(token);
                userProfileService.setPushToken(token.token);
      			console.log("Device token:",token.token);
                push.saveToken(token);
    		});
        });
    });

    // app.constant('ApiUrl', {url: 'http://localhost:8080/api'});
    app.constant('ApiUrl', { url: 'http://sistemauto.herokuapp.com/api' });

    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .state('app', {
                url: '',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'MenuController',
                controllerAs: 'menuCtrl'
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeController',
                        controllerAs: 'homeCtrl'
                    }
                }
            })
            .state('app.clazz', {
                url: '/clazz',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/clazz.html',
                        controller: 'ClazzController',
                        controllerAs: 'clazzCtrl'
                    }
                }
            })
            .state('app.profile', {
                url: '/profile',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/profile.html',
                        controller: 'ProfileController',
                        controllerAs: 'profileCtrl'
                    }
                },
                params: {'autoEscola': undefined}
            });
        $urlRouterProvider.otherwise('/home');
    });
})();
