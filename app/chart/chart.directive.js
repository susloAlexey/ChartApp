
(function () {

    angular
        .module('chartApp')
        .directive('chartDir', chartDir);

    function chartDir() {

        var directive = {
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/chart/chart.directive.html',
            scope: {
                chartConfig: '='
            },
            link: link
        };

        return directive;

        function link(scope, el, attr) {
            var type, data, width, height, barHeight;
            var element = el[0];

            initChart();

            function initChart() {
                type = scope.chartConfig.type;
                data = scope.chartConfig.data;
                width = scope.chartConfig.width;
                height = scope.chartConfig.height;
                barHeight = scope.chartConfig.barHeight;

                clearChart();

                if (type === 'bar') buildBarChart();
                if (type === 'column') buildColumnChart();
            }

            function buildBarChart() {

                var x = d3.scale.linear()
                    .domain([0, d3.max(data)])
                    .range([0, width]);

                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");

                var chart = d3.select(element)
                    .select('svg')
                    .attr("width", width)
                    .attr("height", data.length * barHeight);

                var bar = chart.selectAll("g")
                    .data(data)
                    .enter()
                    .append("g")
                    .attr("transform", function (d, i) { return "translate(0," + i * barHeight + ")"; });

                bar.append("rect")
                    .attr("width", x)
                    .attr("height", barHeight - 1);

                bar.append("text")
                    .attr("x", function (d) { return x(d) - 3; })
                    .attr("y", barHeight / 2)
                    .attr("dy", ".35em")
                    .text(function (d) { return d; });
            }

            function buildColumnChart() {
                var y = d3.scale.linear()
                    .domain([0, d3.max(data)])
                    .range([height, 0]);

                var chart = d3.select(element)
                    .select('svg')
                    .attr("width", width)
                    .attr("height", height);

                var barWidth = width / data.length;

                var bar = chart.selectAll("g")
                    .data(data)
                    .enter().append("g")
                    .attr("transform", function (d, i) { return "translate(" + i * barWidth + ",0)"; });

                bar.append("rect")
                    .attr("y", function (d) { return y(d); })
                    .attr("height", function (d) { return height - y(d); })
                    .attr("width", barWidth - 1);

                bar.append("text")
                    .attr("x", barWidth / 2)
                    .attr("y", function (d) { return y(d) + 5; })
                    .attr("dy", ".75em")
                    .text(function (d) { return d; });
            }

            function clearChart() {
                d3.select(element)
                    .select('svg')
                    .selectAll("*")
                    .remove();
            }

            scope.$watch('chartConfig', initChart, true)
        }
    }
})();

