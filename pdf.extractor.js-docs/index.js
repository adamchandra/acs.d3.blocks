

var width = 1280,
    height = 720,
    x0,
    y0;

function mousemove() {

  var m = d3.mouse(this),
      x1 = m[0],
      y1 = m[1];

  if (x0 != null) {
    svg.append("circle")
      .attr("cx", x0)
      .attr("cy", y0)
      .attr('r', 20)
      .style("stroke-width", "3px")
      .style("stroke", "#fff")
    .transition()
      .attr("r", 4)
      .duration(1200)
    .transition()
      .attr("r", 30)
      .duration(300)
    .transition()
      .attr("r", 10)
      .duration(100)
      .remove();


    x1 = y1 = null;
  }

  x0 = x1;
  y0 = y1;
  
}


var svg = d3.select('#ccc')
      .insert('svg')
      .attr('width', 500)
      .attr('height', 500)
      .on("mousemove", mousemove);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

svg.append('circle')
  .attr('cx', 200)
  .attr('cy', 200)
  .attr('r', 30);

//function x(d) {return d[0]; }
//function y(d) {return d[1]; }
// 
//svg.selectAll('circle').data(data)
//  .enter().append('circle')
//    .attr('cx', x)
//    .attr('cy', y)
//    .attr('r', 10)

