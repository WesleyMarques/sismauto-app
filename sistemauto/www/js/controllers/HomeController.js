(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('HomeController', HomeController);


    HomeController.$injector = ['autoEscolaService', '$scope', 'messageService'];


    function HomeController(autoEscolaService, $scope, messageService) {
        var self = this;

        self.autoEscolas = [];

        $scope.$on('$ionicView.beforeEnter', function() {
            self.loadAll();
        })

        self.loadAll = function() {
            messageService.loadingPopup("Carregando Auto escolas...");
            autoEscolaService.getAll().then(
                function(data) {
                    messageService.closePopup();
                    self.autoEscolas = data;
                },
                function(reason) {
                    messageService.alertPopup("Error", reason);
                });
        };


    };

}());
