(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('MenuController', menuController);


    menuController.$injector = ['$state', 'userProfileService', 'LoginService'];


    function menuController($state, userProfileService, LoginService) {
        var self = this;

        self.isUserLogged = function() {
            return userProfileService.isUserLogged();
        };

        self.logout = function() {
            console.log("cheguei");
            LoginService.logout().then(function() {
                console.log("done");
                $state.go("app.home");
            }, function() {
                console.log("error");
            });
        };
    };

}());
