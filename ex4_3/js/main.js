// COS30045 - Exercise 4.3
// Step 1: index.html loads D3 before this file using defer, so the HTML is ready.

// Step 2: select the HTML container and append an SVG canvas inside it.
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
  .text("Exercise 4.3: D3 test rectangle");

svg.append("desc")
  .attr("id", "svg-description")
  .text("A blue rectangle, 414 units wide and 16 units high, positioned 10 units from the top and left of the SVG canvas. This is a setup example, not energy consumption data.");

// Step 3: append a rectangle to the SVG using hard-coded attributes.
// x and y locate its top-left corner; width and height use the viewBox units.
// These values will eventually come from CSV data when the bar chart is built.
svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 414)
  .attr("height", 16)
  .attr("fill", "blue");
