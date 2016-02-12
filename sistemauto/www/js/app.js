(function() {

    'use strict';

    angular.module('sistemauto.controller', []);

    angular.module('sistemauto.service', []);

    var app = angular.module('sistemauto', [
        'ionic',
        'ionic-material',
        'sistemauto.service',
        'sistemauto.controller',
    ]);


    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '../templates/login.html',
                
            })
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: '../templates/menu.html'
        })
         .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/login.html'                    
                }
            }
        });

        $urlRouterProvider.otherwise('/home');
    });


}());
