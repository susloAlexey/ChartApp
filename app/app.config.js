
(function () {
    'use strict';

    angular
        .module('chartApp')
        .constant('ChartConfig', {
            type: 'bar',
            height: 300,
            width: 360,
            barHeight: 22,
            data: [4, 8, 12, 16, 24, 26, 14, 18, 22, 30, 28, 26, 20]
        });
})();

