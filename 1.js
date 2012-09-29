

// http://en.wikipedia.org/wiki/Sequence_diagram
// https://github.com/mbostock/d3/wiki/API-Reference

console.log("drawing a chart made of svg");
var data = [4, 33, 15, 16, 23, 42];
var svg_chart = d3.select("body")
.append("svg")
.attr("class", "svg_chart")
.attr("width", 420)
.attr("height", 20 * data.length);

var x_scale = d3.scale.linear()
.domain([0, d3.max(data)])
.range([0, 420]);

var y_scale = d3.scale.ordinal()
.domain(data)
.rangeBands([0, 120]);

svg_chart.selectAll("rect")
.data(data)
.enter().append("rect")
.attr("y", y_scale)
.attr("width", x_scale)
.attr("height", y_scale.rangeBand() );

svg_chart.selectAll("text")
.data(data)
.enter().append("text")
.attr("x", x_scale)
.attr("y", function(d) { return y_scale(d) + y_scale.rangeBand() / 2; })
.attr("dx", -3) // padding-right
.attr("dy", ".35em") // vertical-align: middle
.attr("text-anchor", "end") // text-align: right
.text(String);



console.log("drawing a chart made of divs");
var chart = d3.select("body")
.append("div")
.attr("class", "chart");

var data = [4, 8, 15, 16, 23, 42];
var x = d3.scale.linear()
.domain([0, d3.max(data)])
.range(["0px", "440px"]);

chart.selectAll("div")
.data(data)
.enter().append("div")
.style("width", x)
.text(function(d) { return d; });


console.log("drawing a gray circle");
var sampleSVG = d3.select("#viz")
.append("svg")
.attr("width", 100)
.attr("height", 100);

sampleSVG.append("circle")
.style("stroke", "gray")
.style("fill", "white")
.attr("r", 40)
.attr("cx", 50)
.attr("cy", 50)
.on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
.on("mouseout", function(){d3.select(this).style("fill", "white");});

