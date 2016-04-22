(function() {
    'use strict';
    angular.module('sistemauto.service')
        .service('messageService', ['$ionicPopup', messageService]);

    function messageService($ionicPopup) {
        var self = {};
        self.popup = null;

        self.closePopup = function() {
            if (self.popup !== null) {
                self.popup.close();
            }
            self.popup = null;
        };

        self.loadingPopup = function(msg) {
            self.closePopup();
            self.popup = $ionicPopup.alert({
                template: '<center><ion-spinner icon="spiral"></ion-spinner><br></center>',
                title: msg,
                subTitle: '',
                cssClass: 'align-center',
                buttons: []
            });
            return self.popup;
        };

        self.alertPopup = function(title, msg) {
            self.closePopup();
            self.popup = $ionicPopup.alert({
                template: msg,
                cssClass: 'align-center',
                title: title,
            });
            return self.popup;
        };

        self.promptPopup = function(title, template, inputType) {
            self.closePopup();
            self.popup = $ionicPopup.prompt({
                title: title,
                template: template,
                inputType: inputType,
                inputPlaceholder: ''
            });
            return self.popup;
        };

        self.confirmPopup = function(title, msg) {
            self.closePopup();
            self.popup = $ionicPopup.confirm({
                title: title,
                template: msg,
                cssClass: 'align-center'
            });
            return self.popup;
        };

        return self;
    }
})();
