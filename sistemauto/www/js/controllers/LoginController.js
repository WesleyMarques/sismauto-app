(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('LoginController', loginController);

    loginController.$injector = ['LoginService', '$state']

    function loginController(LoginService, $state) {
        var self = this;

        self.user = {};
        
        self.doLogin = function() {
            LoginService.login(self.user).then(function(info) {
                $state.go('app.clazz');
            }, function(error) {
                console.log(error);
            });
        };

        self.backHome = function() {
            $state.go('app.home');
        };
    };
}());
