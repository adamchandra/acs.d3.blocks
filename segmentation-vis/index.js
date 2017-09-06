

var x0,
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
      .attr("r", 30)
      .duration(200)
    .transition()
      .attr("r", 10)
      .duration(100)
      .remove();


    x1 = y1 = null;
  }

  x0 = x1;
  y0 = y1;

}

var svg = d3.select('#main')
    .on("mousemove", mousemove)
;




d3.json("bursts.json", function(error, jsval) {
    if (error) throw error;

    function loopfunc (index) {
        if (index < jsval.length) {

            var rects = svg.selectAll("rect")
                .data(jsval[index].shapes)
            ;

            rects.enter()
              .append("rect")
                .attr("x", function(d){ return d.x; })
                .attr("y", function(d){ return d.y; })
                .attr("width", function(d){ return d.width; })
                .attr("height", function(d){ return d.height; })
                .attr("fill", "yellow")
                .attr("stroke-width", 2)
                .attr("stroke", "#2233ff")
              .transition()
                .delay(function(d, i) { return i * 200; })
                .attr("fill", "#EEE")
                .duration(1000)
              .transition()
                .attr("fill", "#222")
                .duration(1000)
                .remove()
                .on("end", function () {
                    return loopfunc(index + 1);
                })
            ;

            rects.exit().remove();

            return 0;
        } else {
            svg.append("text").text("done!");
        }

        return 0;
    };

    loopfunc(0);


});

    // jsval.forEach( function (jsrec, reci) {

    //     var rects = svg.selectAll("rect")
    //         .data(jsrec.shapes)
    //     ;

    //     console.log(jsrec.shapes);

    //     // rects.enter()
    //     //     .append("rect")
    //     //       .attr("x", function(d){ return d.x; })
    //     //       .attr("y", function(d){ return d.y; })
    //     //       .attr("width", function(d){ return d.width; })
    //     //       .attr("height", function(d){ return d.height; })
    //     //       .attr("fill", "yellow")
    //     //       .attr("stroke-width", 2)
    //     //       .attr("stroke", "#2233ff")
    //     //     .transition()
    //     //       .delay(function(d, i) { return i * 200; })
    //     //       .attr("fill", "#EEE")
    //     //       .duration(1000)
    //     //     .transition()
    //     //       .delay(function() { return reci * 1000; })
    //     //       .attr("fill", "#222")
    //     //       .duration(1000)
    //     //       .remove()
    //     // ;
    //     //       // .on("end", function () {// })

    // });
