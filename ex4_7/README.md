# Exercise 4.7 — Adding labels

This exercise extends the scaled D3.js bar chart with brand names and exact counts. The supplied `data/tvBrandCount.csv` contains 25 TV brands and their counts, not energy consumption measurements. The chart is embedded in the existing WattWise webpage.

## Implementation

- Convert CSV counts to numbers and sort brands from highest to lowest count.
- Reserve 120 SVG units on the left for brand labels and 80 on the right for value labels within a `500 × 500` viewBox.
- Use a linear scale with domain `[0, 1100]` and range `[0, 300]` for bar widths. The supplied maximum is 1,096; increase the domain maximum if future counts exceed 1,100.
- Bind each brand to a `<g>` container and translate it vertically using `yScale(d.brand)`. Each group holds its rectangle, brand label, and count label.
- Set each rectangle's `y` to `0` because its group already supplies the vertical position.
- Right-align brand labels at `x = 110` using `text-anchor="end"`. Position count labels at `120 + xScale(d.count) + 4`.
- Vertically centre both labels using half the band width and `dominant-baseline="middle"`; style them at 13px in CSS.
- Provide an SVG title and data description for assistive technology, plus a visible message if the CSV cannot be loaded.

`drawBarChart` runs once after loading the CSV. CSS resizes the whole SVG, including its text, while preserving its proportions. The padding and font sizes above use SVG coordinates; their displayed size varies with the container width.

## Run locally

Serve this folder over HTTP using VS Code Live Server or another local web server, then open `index.html` through that server. Opening it with `file://` may prevent the CSV from loading. An internet connection is required to load D3 v7 from `https://d3js.org/d3.v7.min.js`.

## AI assistance declaration

OpenAI Codex was used to review and refine the author's existing Exercise 4.7 work against the supplied assignment brief. Assistance in this session included:

- Formatting the JavaScript and adding comments explaining the label spacing, group transforms, and text alignment.
- Replacing repeated layout values with named constants and centring labels relative to each bar.
- Removing obsolete rectangle test code and development logging.
- Updating page text and SVG accessibility descriptions that still referred to Exercise 4.3.
- Moving SVG styling into CSS and adding a visible CSV loading error message.
- Drafting this README and assisting with verification and Git operations.

The CSV dataset was not generated or modified by Codex during this refinement. This declaration describes assistance in this session and does not establish the provenance of earlier work. The author remains responsible for reviewing the submission, understanding the code, and following the unit's AI-use and assessment requirements.
