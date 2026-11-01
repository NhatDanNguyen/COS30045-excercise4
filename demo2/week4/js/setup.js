// COS30045 Data Visualisation
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .attr("role", "img")
  .attr("aria-labelledby", "svg-title svg-description")

  .style("border", "1px solid black");

svg.append("title")
  .attr("id", "svg-title")
  .text("Exercise 4.3: D3 test rectangle");

svg.append("desc")
  .attr("id", "svg-description")
  .text("A blue rectangle, 414 units wide and 16 units high, positioned 10 units from the top and left of the SVG canvas. This is a setup example, not energy consumption data.");

svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 414)
  .attr("height", 16)
  .attr("fill", "blue");
