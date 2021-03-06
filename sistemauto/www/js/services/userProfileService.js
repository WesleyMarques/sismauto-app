(function() {
    'use strict';
    angular.module('sistemauto.service').service('userProfileService', userProfileService);

    userProfileService.$injector = ['$q', '$http'];

    function userProfileService($q, $http) {
        var self = this;
        self.getUserLogged = function() {
            if (window.localStorage.userId)
                return window.localStorage.user;
        };

        self.isUserLogged = function(){
        	return (window.localStorage.getItem('userId') !== "null");
        };

        self.setTokenUser = function(token){
        	window.localStorage.setItem('token', token);
        };

        self.setUserId = function(id){
        	window.localStorage.setItem('userId', id);
        }

        self.getUserId = function(){
            return window.localStorage.getItem('userId');
        }


        self.setAutoId = function(id){
            window.localStorage.setItem('autoId', id);
        }

        self.getAutoId = function(){
            return window.localStorage.getItem('autoId');
        }

        this.getPushToken = function() {
            return window.localStorage.getItem('push-token');
        };

        this.setPushToken = function(token) {
            window.localStorage.setItem('push-token', token);
        };


        return self;
    };

}());
