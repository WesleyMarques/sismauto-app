(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('LoginController', loginController);

    loginController.$injector = ['clazzService'];

    function loginController(clazzService) {
        var self = this;

        self.myClasses = [];

        self.getAllClazz = function(){
            clazzService.getAll().then(function(data){
                
            },function(reason){});
        };
        
    };
}());
