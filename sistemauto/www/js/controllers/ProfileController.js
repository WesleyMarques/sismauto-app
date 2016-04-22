(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('ProfileController', profileCtrl);

    profileCtrl.$injector = ['$scope', '$stateParams', '$timeout', 'ionicMaterialMotion', 'ionicMaterialInk']


    function profileCtrl($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

        var self = this;
        self.autoEscola = null;

        $scope.$on('$ionicView.beforeEnter', function() {
            self.getAutoEscola();
        });

        self.getAutoEscola = function(){
            if($stateParams.autoEscola){
                self.autoEscola = $stateParams.autoEscola;
            }
            
        }


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
