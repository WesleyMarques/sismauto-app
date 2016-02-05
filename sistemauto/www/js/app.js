(function() {

    'use strict';

    angular.module('sistemauto.controller', []);

    angular.module('sistemauto.service', []);

    var app = angular.module('sistemauto', [
        'ionic',
        'sistemauto.service',
        'sistemauto.controller',
    ]);


    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '../templates/login.html',
                controller: 'LoginController as loginCtrl'
            });
        $urlRouterProvider.otherwise('/login');
    });


}());
