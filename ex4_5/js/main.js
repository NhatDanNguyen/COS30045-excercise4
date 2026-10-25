// COS30045 - Exercise 4.5: bind CSV data to SVG rectangles.
// index.html loads D3 first; both deferred scripts run after the HTML is parsed.

// The viewBox uses SVG units. CSS fits the canvas to its container, but does not
// scale count values to the available chart width (that is Exercise 4.6).
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

  // Step 1: bind each row to a rectangle. join creates, updates, or removes
  // rectangles to match the data. The count class supports styling by count.
  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`)
    // Step 2: use the numeric count directly for width and a fixed thickness.
    .attr("width", d => d.count)
    .attr("height", barHeight)
    .attr("fill", "blue")
    // Step 3: align the left edges and use the row index to space bars vertically.
    .attr("x", 0)
    .attr("y", (d, i) => i * (barHeight + barSpacing));

  chartDescription.text(
    `${data.length} blue horizontal bars show TV counts by brand, ordered ` +
    "from highest to lowest. Each bar's width equals its count in SVG units. " +
    data.map(d => `${d.brand}: ${d.count}`).join("; ") + "."
  );
};

// CSV fields arrive as strings; convert count to a number before sorting/drawing.
d3.csv("./data/tvBrandCount.csv", d => ({
  brand: d.brand,
  count: +d.count
})).then(data => {
  // Keep each brand and count together while ordering the bars by count.
  data.sort((a, b) => b.count - a.count);
  drawBarChart(data);
}).catch(error => {
  // Give a visible explanation if the CSV cannot be loaded, such as via file://.
  chartDescription.text("The TV brand count chart could not be loaded.");
  d3.select("#chart-error")
    .property("hidden", false)
    .text("Unable to load the TV data. Serve this folder over HTTP and try again.");
  console.error("Unable to load or draw the TV brand counts:", error);
});
