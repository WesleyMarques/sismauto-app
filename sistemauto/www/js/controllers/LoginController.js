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
        self.test = "teste";
        self.doLogin = function() {
            console.log(self.user);
            self.user.type = "student";
            LoginService.login(self.user).then(function(info) {
                $state.go('app.home');
            }, function(error) {
                
            });
        };

        self.backHome = function() {
            console.log("esntre");
            $state.go('app.home');
        };
    };
}());
