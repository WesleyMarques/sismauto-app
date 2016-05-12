(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.service').service('autoEscolaService', autoEscolaService);

    autoEscolaService.$injector = ['$q', '$http', 'messageService', 'ApiUrl'];

    function autoEscolaService($q, $http, messageService, ApiUrl) {
        var self = this;

        self.getAll = function() {
            messageService.loadingPopup("Carregando Auto escolas...");
            var deffered = $q.defer();
            $http.get("http://sistemauto.herokuapp.com/api/user").then(
                function(data) {
                    messageService.closePopup();
                    return deffered.resolve(data.data);
                },
                function(reason) {
                    messageService.alertPopup("Error", reason);
                    return deffered.reject(reason);
                });
            return deffered.promise;
        };
        return self;
    };
}());