(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('ProfileController', profileCtrl);

    profileCtrl.$injector = ['$scope', '$stateParams', '$timeout', 'ionicMaterialMotion', 'ionicMaterialInk', '$state', 'LoginService']


    function profileCtrl($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $state, LoginService) {

        var self = this;
        self.autoEscola = null;
        self.actualTab = 0;
        self.user = {};

        $scope.$on('$ionicView.beforeEnter', function() {
            self.getAutoEscola();
        });

        self.setTabShow = function(tabNum) {
            self.actualTab = tabNum;
        };

        self.tabShow = function(tabNum){
            return tabNum === self.actualTab;
        }

        self.getAutoEscola = function() {
            if ($stateParams.autoEscola) {
                self.autoEscola = $stateParams.autoEscola;
            }

        }

        self.clearForm = function(){
            self.user = {};
        };

        self.doLogin = function() {
            
            self.user.type = "student";
            LoginService.login(self.user).then(function(info) {
                $state.go('app.home');
            }, function(error) {
                console.log(error);
            });
        };


        // Set Motion
        $timeout(function() {
            ionicMaterialMotion.slideUp({
                selector: '.slide-up'
            });
        }, 300);

        $timeout(function() {
            ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 700);

        // Set Ink
        ionicMaterialInk.displayEffect();
    }
}());
