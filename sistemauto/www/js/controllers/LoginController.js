(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('LoginController', loginController);

    loginController.$injector = ['LoginService', '$state', 'userProfileService']

    function loginController(LoginService, $state, userProfileService) {
        var self = this;

        self.user = {};
        
        self.doLogin = function() {
            user.pushToken = userProfileService.getPushToken();
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
