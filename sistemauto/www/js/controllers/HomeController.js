(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('HomeController', HomeController);

    HomeController.$injector = ['autoEscolaService'];
    

    function HomeController(autoEscolaService) {
        var self = this;

        self.autoEscolas = [];

        self.loadAll = function(){
            autoEscolaService.getAll().then(
                function(data){
                    self.autoEscolas = data;
                },function(reason){
                    console.log(reason);
                });
        };


    };
}());
