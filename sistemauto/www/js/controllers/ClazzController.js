(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('ClazzController', clazzController);

    clazzController.$injector = ['clazzService'];

    function clazzController(ClazzService) {
        var self = this;

        self.myClasses = [];

        self.getAllClazz = function(){
            ClazzService.getAll().then(function(data){
                
            },function(reason){});
        };
        
    };
}());
