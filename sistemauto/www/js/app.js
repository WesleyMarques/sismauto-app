(function() {

    'use strict';

    angular.module('sistemauto.controller', []);

    angular.module('sistemauto.service', []);

    var app = angular.module('sistemauto', [
        'sistemauto.service',
        'sistemauto.controller',
    ]);


    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../view/alunos.html',
                controller: 'AlunosController'
            });
    });


}());
