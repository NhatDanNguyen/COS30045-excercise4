// COS30045 Data Visualisation
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 650")
  .attr("role", "img")
  .attr("aria-labelledby", "svg-title svg-description");

svg.append("title")
  .attr("id", "svg-title")
  .text("TV counts by brand");

const chartDescription = svg.append("desc")
  .attr("id", "svg-description")
  .text("TV brand counts are loading.");

const drawBarChart = data => {
  const barHeight = 20;
  const barSpacing = 5;

  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`)

    .attr("width", d => d.count)
    .attr("height", barHeight)
    .attr("fill", "blue")

    .attr("x", 0)
    .attr("y", (d, i) => i * (barHeight + barSpacing));

  chartDescription.text(
    `${data.length} blue horizontal bars show TV counts by brand, ordered ` +
    "from highest to lowest. Each bar's width equals its count in SVG units. " +
    data.map(d => `${d.brand}: ${d.count}`).join("; ") + "."
  );
};

d3.csv("./data/tvBrandCount.csv", d => ({
  brand: d.brand,
  count: +d.count
})).then(data => {

  data.sort((a, b) => b.count - a.count);
  drawBarChart(data);
}).catch(error => {

  chartDescription.text("The TV brand count chart could not be loaded.");
  d3.select("#chart-error")
    .property("hidden", false)
    .text("Unable to load the TV data. Serve this folder over HTTP and try again.");
  console.error("Unable to load or draw the TV brand counts:", error);
});
