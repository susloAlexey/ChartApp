
(function () {
    'use strict';

    angular
        .module('chartApp')
        .config(function ($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController',
                    controllerAs: 'vm'
                })
                .otherwise('/');
        });
})();