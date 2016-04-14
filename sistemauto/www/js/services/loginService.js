(function() {
    'use strict';
    angular.module('sistemauto.service').service('LoginService', loginService);

    loginService.$injector = ['$q', '$http', 'userProfileService', 'ApiUrl'];

    function loginService($q, $http, userProfileService, ApiUrl) {
        var self = this;
        /**
         * Realiza a requisição http para autenticar no sistema.
         * @param {Object} com email e senha para autenticar
         * 
         * @return {Promise} promessa da requisição.
         */
        self.login = function(data) {
            var deferred = $q.defer();

            $http.post(ApiUrl.url + '/authenticate/login', data).then(function(info) {
                userProfileService.setTokenUser(info.data.token);
                userProfileService.setUserId(info.data.id);
                deferred.resolve({});
            }, function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };


		/**
		 * Realiza a requisição http para realizar logout no sistema.
		 * 
		 * @return {Promise} promessa da requisição.
		 */
		self.logout = function() {
			var deferred = $q.defer();
			
			$http.post(ApiUrl.url + '/authenticate/logout').then(function(info) {
				userProfileService.setTokenUser(null);
				userProfileService.setUserId(null);
				deferred.resolve(info);
			}, function(error) {
				deferred.reject(error);
			});
			
			return deferred.promise;
		};
        return self;
    };

}());
