(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.service').service('autoEscolaService', autoEscolaService);

    autoEscolaService.$injector = ['$q', '$http'];

    function autoEscolaService($q, $http) {
        var self = this;

        self.getAll = function() {
            var deffered = $q.defer();
            $http.get("http://sistemauto.herokuapp.com/api/user").then(
                function(data) {
                    return deffered.resolve(data.data);
                },
                function(reason) {

                    return deffered.reject(reason);
                });
            return deffered.promise;
        };

        return self;
    };
}());