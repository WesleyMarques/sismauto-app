(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('HomeController', HomeController);



    HomeController.$injector = ['autoEscolaService', '$scope'];


    function HomeController(autoEscolaService, $scope) {
        var self = this;

        self.autoEscolas = [];

        $scope.$on('$ionicView.beforeEnter', function() {
            self.loadAll();
        })

        self.loadAll = function() {
            autoEscolaService.getAll().then(
                function(data) {
                    console.log(data);
                    self.autoEscolas = data;
                },
                function(reason) {
                    console.log(reason);
                });
        };


    };

}());
