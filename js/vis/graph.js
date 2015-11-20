function drawNetworkView(networkData, svgName, networkVar) {
    var svg, xScale, yScale, widthScale, xAxis, yAxis, rScale, w, h, padding;

    var drawGraph = function () {
        w = 400;
        h = 400;
        padding = 10;

        var mappedNodes = {};

        networkData.nodes.forEach(function (d) {
            mappedNodes[d.id] = d;
        })

        xScale = d3.scale.linear()
            .domain([d3.min(networkData.nodes, function (d) {
                return d.x;
            }), d3.max(networkData.nodes, function (d) {
                return d.x;
            })])
            .range([padding, w - padding]);
        yScale = d3.scale.linear()
            .domain([d3.min(networkData.nodes, function (d) {
                return d.x;
            }), d3.max(networkData.nodes, function (d) {
                return d.x;
            })])
            .range([padding, h - padding]);

        rScale = d3.scale.linear()
            .domain([d3.min(networkData.nodes, function (d) {
                return d.size;
            }), d3.max(networkData.nodes, function (d) {
                return d.size;
            })])
            .range([2, 11]);

        widthScale = d3.scale.linear()
            .domain([d3.min(networkData.edges, function (d) {
                return d.size;
            }), d3.max(networkData.edges, function (d) {
                return d.size;
            })])
            .range([0.1, 4]);

        var colorScale1 = d3.scale.quantile()
            .domain([0, 1])
            .range(["#045A8D", "#2B8CBE", "#74A9CF", "#A6BDDB", "#D0D1E6", "#F1EEF6"]);

        var curWidth = d3.select("#interactionOuter").style('width');

        var offset = (parseInt(curWidth.substr(0, curWidth.length - 2)) - w) / 2.5;

        d3.select(svgName).select("svg").remove();

        svg = d3.select(svgName)
            .append("svg")
            .attr("width", w * 2)
            .attr("height", h)
            .append("g")
            .attr("transform", "translate(" + offset + ",0)");

        svg.selectAll('.edge')
            .data(networkData.edges)
            .enter()
            .append('path')
            .attr('class', "edge")
            .attr('d', function (d) {
                // var path = "M" + xScale(mappedNodes[d['source']].x) + "," + yScale(mappedNodes[d['source']].y);
                // path = path + "C" +  xScale(mappedNodes[d['target']].x) + "," + yScale(mappedNodes[d['source']].y) + " ";
                // path = path + xScale(mappedNodes[d['source']].x) + "," + yScale(mappedNodes[d['target']].y) + " ";
                // path = path + xScale(mappedNodes[d['target']].x) + "," + yScale(mappedNodes[d['target']].y);
                // return path;
                var r = (xScale(mappedNodes[d['target']].x) - xScale(mappedNodes[d['source']].x)) * (xScale(mappedNodes[d['target']].x) - xScale(mappedNodes[d['source']].x));
                r = r + (yScale(mappedNodes[d['target']].y) - yScale(mappedNodes[d['source']].y)) * (yScale(mappedNodes[d['target']].y) - yScale(mappedNodes[d['source']].y));
                r = Math.sqrt(r) * 2;
                var path = "M" + xScale(mappedNodes[d['source']].x) + "," + yScale(mappedNodes[d['source']].y);
                path = path + "A" + r + "," + r + " 0 0 1";
                path = path + xScale(mappedNodes[d['target']].x) + "," + yScale(mappedNodes[d['target']].y);
                return path;
            })
            .style("fill", "none")
            .style("stroke-width", function (d) {
                return widthScale(d.size)
            })
            .style("stroke", function (d) {
                return d.color
            });

        svg.selectAll(".node")
            .data(networkData.nodes)
            .enter()
            .append("circle")
            .attr("class", "graph_node")
            .attr("cx", function (d) {
                return xScale(d.x);
            })
            .attr("cy", function (d) {
                return yScale(d.y);
            })
            .attr("r", function (d) {
                return rScale(d.size);
            })
            .attr("fill", function (d) {
                return d.color;
            })
            .on("mouseover", function (d) {
                var selectedNodes = [];
                console.log(d);
                // selectedNodes.push(d);
                // svg.selectAll(".")
                svg.selectAll(".edge")
                    .filter(function (dd) {
                        if (dd.source == d.id || dd.target == d.id) {
                            selectedNodes.push(dd.source);
                            selectedNodes.push(dd.target);
                            return null;
                        } else {
                            return this;
                        }
                    })
                    .attr('opacity', "0.1");

                svg.selectAll(".graph_node")
                    .filter(function (dd) {
                        if (selectedNodes.indexOf(dd.id) >= 0) return null;
                        else return this;
                    })
                    .attr('opacity', "0.1")
            })
            .on("mouseout", function (d) {
                svg.selectAll(".edge")
                    .attr('opacity', "1");
                svg.selectAll(".graph_node")
                    .attr('opacity', "1");
            })
    }

    drawGraph();
}