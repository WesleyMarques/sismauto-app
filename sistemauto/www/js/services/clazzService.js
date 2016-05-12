(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular.module('sistemauto.service').service('ClazzService', clazzService);

    clazzService.$injector = ['$q', '$http', 'userProfileService', 'ApiUrl'];

    function clazzService($q, $http, userProfileService, ApiUrl) {
        var self = this;


        self.getAll = function(idStudent) {
            var deferred = $q.defer();
            var url = ApiUrl.url + '/user/' + userProfileService.getAutoId() + "/student/" + userProfileService.getUserId() + '/clazz';
            $http.get(url).then(function(info) {
                console.log(info);
                deferred.resolve(info);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        return self;
    };
}());