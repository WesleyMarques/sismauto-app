(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.service').service('clazzService', clazzService);

    clazzService.$injector = ['$q', '$http', 'userProfileService'];

    function clazzService($q, $http, userProfileService) {
        var self = this;

        self.getAll = function(idStudent) {
            var deferred = $q.defer();
            var url = ApiUrl.url + '/user/' + userProfileService.getUserId() + "/student/" + userProfileService.getUserId() + '/clazz';
            $http.get(url).then(function(info) {
                deferred.resolve(info);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        return self;
    };
}());