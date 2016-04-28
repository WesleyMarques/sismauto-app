(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('HomeController', HomeController);


    HomeController.$injector = ['autoEscolaService', '$scope', 'messageService', '$state'];


    function HomeController(autoEscolaService, $scope, messageService, $state) {
        var self = this;

        self.autoEscolas = [];

        $scope.$on('$ionicView.beforeEnter', function() {
            self.loadAll();
        });

        self.stateGo = function(nextState, data) {
            var newData = {};
            if (data) {      
                newData.autoEscola = data;     
                $state.go(nextState, newData);
            } else {
                $state.go(nextState);
            }
        };

        self.loadAll = function() {
            autoEscolaService.getAll().then(
                function(data) {
                    self.autoEscolas = data;
                },
                function(reason) {});
        };


    };

}());
