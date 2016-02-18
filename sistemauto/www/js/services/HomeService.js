(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.service').controller('autoEscolaService', autoEscolaService);

    autoEscolaService.$injector = ['$q', '$http'];

    function autoEscolaService($q, $http) {
        var self = this;

        self.getAll = function(){
            var deffered = $q.defer();
            $http.get("").then(
                function(data){

                },function(reason){

                });
            return deffered.promise;
        };

        return self;
    };
}());
