# Exercise 4.5 — D3 Binding and Drawing with Data

This exercise draws a horizontal bar chart from `data/tvBrandCount.csv` using D3.js v7. Each row contains a TV brand and its count; the chart shows counts, not energy consumption.

## Implementation

- Import the CSV and convert `count` from a string to a number.
- Sort the rows by count, from highest to lowest, then call `drawBarChart(data)`.
- Use `.selectAll("rect").data(data).join("rect")` to bind each row to a rectangle.
- Assign `bar` and `bar-<count>` classes to each rectangle.
- Set width to `d.count`, height to 20 SVG units, and fill to blue.
- Set `x` to 0 and `y` to `i * (barHeight + barSpacing)`, with a 5-unit gap.

The fixed `1200 × 650` viewBox fits the supplied 25 bars. CSS resizes the entire SVG to fit the page. Data scaling and visible labels are left for Exercises 4.6 and 4.7; counts larger than the viewBox width can be clipped. The SVG includes a text description listing brands and counts for assistive technology.

## Run locally

Serve this folder using an HTTP server, such as VS Code Live Server, and open `index.html` through that server. Opening it directly with `file://` may prevent the CSV from loading. An internet connection is needed to load D3 from `https://d3js.org/d3.v7.min.js`.

## AI assistance declaration

OpenAI Codex was used to review and refine the existing Exercise 4.5 work against the supplied assignment brief. Its assistance included:

- Clarifying comments and formatting the D3 data binding and drawing code.
- Removing obsolete test code and development logging.
- Updating page text and SVG accessibility descriptions from Exercise 4.3 to Exercise 4.5.
- Adjusting the fixed SVG height to suit the supplied dataset and moving the border styling into CSS.
- Adding a visible CSV loading error message.
- Drafting this README and assisting with verification and Git operations.

The CSV dataset was not generated or modified by Codex during this refinement. This declaration describes assistance in this session; it does not establish the provenance of earlier work. The student remains responsible for reviewing the submission, understanding the code, and following the unit's AI-use and assessment requirements.
