// COS30045 Data Visualisation
const chartWidth = 500;
const chartHeight = 500;
const leftPadding = 120;
const rightPadding = 80;
const labelGap = 10;
const valueGap = 4;

const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", `0 0 ${chartWidth} ${chartHeight}`)
  .attr("role", "img")
  .attr("aria-labelledby", "svg-title svg-description");

svg.append("title")
  .attr("id", "svg-title")
  .text("TV brand counts with brand and value labels");

const description = svg.append("desc")
  .attr("id", "svg-description")
  .text("Loading TV brand counts.");

const drawBarChart = data => {

  const xScale = d3.scaleLinear()
    .domain([0, 1100])
    .range([0, chartWidth - leftPadding - rightPadding]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, chartHeight])
    .padding(0.1);

  const barAndLabel = svg.selectAll("g.bar-and-label")
    .data(data, d => d.brand)
    .join("g")
    .attr("class", "bar-and-label")
    .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

  barAndLabel.append("rect")
    .attr("x", leftPadding)
    .attr("y", 0)
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "blue");

  barAndLabel.append("text")
    .text(d => d.brand)
    .attr("x", leftPadding - labelGap)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dominant-baseline", "middle")
    .attr("text-anchor", "end");

  barAndLabel.append("text")
    .text(d => d.count)
    .attr("x", d => leftPadding + xScale(d.count) + valueGap)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dominant-baseline", "middle");

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
  console.table(data);
  drawBarChart(data);
}).catch(error => {
  description.text("TV brand counts could not be loaded.");
  d3.select("#chart-error")
    .property("hidden", false)
    .text("The chart could not be loaded. Serve this folder over HTTP and check that data/tvBrandCount.csv is available.");
  console.error("Unable to draw the TV brand chart:", error);
});
