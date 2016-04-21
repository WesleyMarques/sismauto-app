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

