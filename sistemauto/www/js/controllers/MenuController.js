(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('MenuController', menuController);


    menuController.$injector = ['$scope', 'userProfileService'];


    function menuController($scope, userProfileService) {
        var self = this;

        self.isUserLogged = function(){
            return userProfileService.isUserLogged();
        };

    };

}());
