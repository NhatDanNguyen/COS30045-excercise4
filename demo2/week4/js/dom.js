// COS30045 Data Visualisation
d3.select("#d3-heading")
  .style("color", "#21834b");

d3.selectAll(".card-number")
  .style("letter-spacing", "0.12em");

d3.select("#d3-message")
  .append("p")
  .attr("class", "d3-added-message")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

d3.select("#energy-svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 100)
  .attr("height", 30)
  .style("fill", "green");
