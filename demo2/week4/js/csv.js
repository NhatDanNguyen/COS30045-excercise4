// COS30045 Data Visualisation
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .attr("role", "img")
  .attr("aria-labelledby", "svg-title svg-description")

  .style("border", "1px solid black");

svg.append("title")
  .attr("id", "svg-title")
  .text("D3 canvas: test rectangle from Exercise 4.3");

svg.append("desc")
  .attr("id", "svg-description")
  .text("A blue rectangle, 414 units wide and 16 units high, positioned 10 units from the top and left of the SVG canvas. This is a setup example, not energy consumption data.");

svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 414)
  .attr("height", 16)
  .attr("fill", "blue");

d3.csv("./data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {

  console.log("Typed CSV data:", data);
  console.log("Number of brands:", data.length);
  console.log("Maximum count:", d3.max(data, d => d.count));
  console.log("Minimum count:", d3.min(data, d => d.count));
  console.log("Count extent [min, max]:", d3.extent(data, d => d.count));

  data.sort((a, b) => b.count - a.count);
  console.table(data);

  drawBarChart(data);
}).catch(error => {
  console.error("Unable to load TV brand data:", error);
  d3.select("#data-status")
    .text("Unable to load TV brand data. Check the browser console and run this page through a local HTTP server.");
});

function drawBarChart(data) {
  d3.select("#data-status")
    .text(`${data.length} brands loaded. See the console for statistics and sorted rows.`);
}
