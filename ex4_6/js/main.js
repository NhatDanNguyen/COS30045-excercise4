// COS30045 Data Visualisation
const chartWidth = 500;
const chartHeight = 500;
const rightPadding = 100;

const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", `0 0 ${chartWidth} ${chartHeight}`)
  .attr("role", "img")
  .attr("aria-labelledby", "svg-title svg-description");

svg.append("title")
  .attr("id", "svg-title")
  .text("TV brand counts: scaled horizontal bar chart");

const description = svg.append("desc")
  .attr("id", "svg-description")
  .text("Loading TV brand counts.");

const createBarChart = data => {

  const xScale = d3.scaleLinear()
    .domain([0, 1200])
    .range([0, chartWidth - rightPadding]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, chartHeight])
    .padding(0.1);

  svg.selectAll("rect")
    .data(data, d => d.brand)
    .join("rect")
    .attr("x", 0)
    .attr("y", d => yScale(d.brand))
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "blue");

  description.text(
    `TV counts for ${data.length} brands, ordered from highest to lowest. ` +
    data.map(d => `${d.brand}: ${d.count}`).join("; ") + "."
  );
};

d3.csv("./data/tvBrandCount.csv", d => ({
  brand: d.brand,
  count: +d.count
})).then(data => {
  data.sort((a, b) => b.count - a.count);
  createBarChart(data);
}).catch(error => {
  description.text("TV brand counts could not be loaded.");
  d3.select("#chart-error")
    .property("hidden", false)
    .text("The chart could not be loaded. Serve this folder over HTTP and check that data/tvBrandCount.csv is available.");
  console.error("Unable to draw the TV brand chart:", error);
});
