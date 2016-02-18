(function() {

    'use strict';

    angular.module('sistemauto.controller', []);

    angular.module('sistemauto.service', []);

    var app = angular.module('sistemauto', [
        'ionic',
        'ngCordova',
        'ionic-material',
        'sistemauto.service',
        'sistemauto.controller'
    ]);

    app.run(function($ionicPlatform) {
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
        });
    });


    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html'
            })
            .state('app', {
                url: '',
                abstract: true,
                templateUrl: 'templates/menu.html'
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
            });

        $urlRouterProvider.otherwise('/home');
    });


})();
