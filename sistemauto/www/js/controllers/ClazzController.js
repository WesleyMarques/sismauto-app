(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.controller').controller('ClazzController', clazzController);

    clazzController.$injector = ['clazzService', '$scope'];

    function clazzController(ClazzService, $scope) {
        var self = this;

        $scope.$on('$ionicView.beforeEnter', function() {
            self.getAllClazz();
        });

        self.myClasses = [];

        self.getAllClazz = function(){
            ClazzService.getAll().then(function(data){
                self.myClasses = data.data;
            },function(reason){});
        };

        self.getDate = function(date){
            var formatDate = new Date(date);
            return formatDate.getDate()+"/"+((formatDate.getMonth()+1))+
            "/"+formatDate.getFullYear() + " às "+("0"+formatDate.getHours()).substr(-2)+
            ":"+("0"+formatDate.getMinutes()).substr(-2)+" Hrs";
        }

        self.duration = function(start, end){
            return new Date(start).getHours() - new Date(end).getHours() + " Horas";
        }
        
    };
}());
