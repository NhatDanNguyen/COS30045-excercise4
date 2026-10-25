# Exercise 4.6 — Scaling charts

This exercise uses D3.js v7 to draw a responsive horizontal bar chart from `data/tvBrandCount.csv`. The supplied dataset contains 25 TV brands and their counts, not energy consumption measurements.

## Implementation

- Convert CSV counts to numbers and sort brands from highest to lowest count.
- Use `d3.scaleLinear()` with domain `[0, 1200]` to include the largest count, 1,096. Its range is `[0, chartWidth - rightPadding]`, currently `[0, 400]`.
- Use `d3.scaleBand()` with the brand names as its domain, range `[0, chartHeight]`, and `.padding(0.1)` to leave gaps between bars.
- Set each bar's width with `xScale(d.count)`, vertical position with `yScale(d.brand)`, and thickness with `yScale.bandwidth()`.
- Use a `500 × 500` viewBox. The scale ranges share the viewBox dimensions, so all bars fit vertically and horizontally without fixed bar-height or spacing variables.
- Resize the SVG with CSS while preserving its aspect ratio. Include an SVG title, a text description of the counts for screen readers, and a visible message if the CSV cannot be loaded.

To experiment with the canvas size, change `chartWidth` and `chartHeight` in `js/main.js`; keep the width greater than `rightPadding`. The 100-unit right margin reserves space for later labels. The numerical domain is fixed for the supplied data; increase its maximum if future counts exceed 1,200. Visible labels and axes are left for the next exercise.

## Run locally

Serve this folder over HTTP using a tool such as VS Code Live Server, then open `index.html` through that server. Opening it with `file://` may prevent D3 from loading the CSV. An internet connection is required to load D3 from `https://d3js.org/d3.v7.min.js`.

## AI assistance declaration

OpenAI Codex was used to review and refine the author's existing Exercise 4.6 work against the supplied assignment brief. Assistance in this session included:

- Clarifying comments and formatting the JavaScript.
- Correcting the band scale's range to match the SVG height and sharing dimensions between the viewBox and scale ranges.
- Removing obsolete test code and development logging.
- Updating page text and accessibility descriptions that still referred to Exercise 4.3.
- Moving the SVG border into CSS and adding a visible chart-loading error message.
- Drafting this README and assisting with verification and Git operations.

The CSV dataset was not generated or modified by Codex during this refinement. This declaration describes assistance in this session and does not establish the provenance of earlier work. The author remains responsible for reviewing the submission, understanding the code, and following the unit's AI-use and assessment requirements.
