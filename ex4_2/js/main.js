// COS30045 - Exercise 4.2
// D3 library and this file are loaded separately in index.html.

// Step 2: select an existing HTML element and change its appearance.
d3.select("#d3-heading")
  .style("color", "#21834b");

// Extra Step 2 example: change the appearance of several HTML elements.
d3.selectAll(".card-number")
  .style("letter-spacing", "0.12em");

// Step 3: append a paragraph to a specific div.
d3.select("#d3-message")
  .append("p")
  .attr("class", "d3-added-message")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

// Step 4: append a rectangle to an existing SVG and assign its attributes.
d3.select("#energy-svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 100)
  .attr("height", 30)
  .style("fill", "green");
