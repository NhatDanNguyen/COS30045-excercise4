// COS30045 - Exercise 4.4: load, convert, inspect, and sort CSV data.
// index.html loads D3 before this file using defer, so the HTML is ready.

// Retain the SVG setup from Exercise 4.3 for the next exercise's bar chart.
// viewBox defines a 1200 x 1600 coordinate system, not a fixed on-screen size.
// The CSS scales the canvas with its container while preserving this aspect ratio.
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .attr("role", "img")
  .attr("aria-labelledby", "svg-title svg-description")
  // The border makes the canvas boundaries visible during this setup exercise.
  .style("border", "1px solid black");

// Provide a text alternative for the generated SVG for screen reader users.
svg.append("title")
  .attr("id", "svg-title")
  .text("D3 canvas: test rectangle from Exercise 4.3");

svg.append("desc")
  .attr("id", "svg-description")
  .text("A blue rectangle, 414 units wide and 16 units high, positioned 10 units from the top and left of the SVG canvas. This is a setup example, not energy consumption data.");

// Retain the test rectangle with hard-coded attributes from Exercise 4.3.
// x and y locate its top-left corner; width and height use the viewBox units.
// These values will eventually come from CSV data when the bar chart is built.
svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 414)
  .attr("height", 16)
  .attr("fill", "blue");

// Steps 1-2: CSV paths resolve relative to index.html, not this JavaScript file.
// Column names must match the CSV headers exactly. Unary + converts the count
// string to a number so D3 can calculate numeric statistics and chart scales.
d3.csv("./data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  // Step 3: inspect the typed objects and summary values in the browser console.
  console.log("Typed CSV data:", data);
  console.log("Number of brands:", data.length);
  console.log("Maximum count:", d3.max(data, d => d.count));
  console.log("Minimum count:", d3.min(data, d => d.count));
  console.log("Count extent [min, max]:", d3.extent(data, d => d.count));

  // Sort in place by count, largest first, before handing data to the chart.
  data.sort((a, b) => b.count - a.count);
  console.table(data);

  // Keep this inside .then(): CSV loading is asynchronous.
  drawBarChart(data);
}).catch(error => {
  console.error("Unable to load TV brand data:", error);
  d3.select("#data-status")
    .text("Unable to load TV brand data. Check the browser console and run this page through a local HTTP server.");
});

// Exercise 4.4 only prepares the data. Add data-driven bars here in the next
// exercise; this placeholder accepts the sorted array without a ReferenceError.
function drawBarChart(data) {
  d3.select("#data-status")
    .text(`${data.length} brands loaded and sorted by count, largest first. Open the browser console to inspect the data and statistics. Bar chart drawing follows in the next exercise.`);
}
