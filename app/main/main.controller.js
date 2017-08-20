
(function () {
    'use strict';

    angular
        .module('chartApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$compile', '$rootScope', 'ChartConfig'];

    function MainController($compile, $rootScope, ChartConfig) {

        var vm = this;

        vm.chartConfig = ChartConfig;

        vm.addVisualization = addVisualization;
        vm.setChartsType = setChartsType;

        /////////////

        function addVisualization() {
            var chartScope = $rootScope.$new();
            chartScope.chartConfig = vm.chartConfig;
            var chart = $compile('<div chart-dir chart-config="chartConfig"></div>')(chartScope);
            var container = document.querySelector('.charts-container');
            angular.element(container).append(chart);
        }

        function setChartsType(type) {
            vm.chartConfig.type = type;
        }
    }
})();