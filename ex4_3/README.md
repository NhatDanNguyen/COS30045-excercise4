# Exercise 4.3 — D3 set up

**Unit:** COS30045 — Data Visualisation

This exercise prepares the Energy Consumption website for a D3 bar chart. It creates a responsive SVG canvas and draws one blue test rectangle. CSV loading and data-driven bars belong to later exercises and are not implemented here.

## What this exercise demonstrates

1. Retain the D3 library and `js/main.js` script references after removing the Exercise 4.2 D3 examples.
2. Add a `.responsive-svg-container` div, centre it with automatic horizontal margins, and limit its width to 1200 CSS pixels.
3. Use D3 to append an SVG with `viewBox="0 0 1200 1600"` and a black border to show the canvas boundaries.
4. Append a blue rectangle at `(10, 10)` with a width of `414` and height of `16` in SVG coordinate units.

The brief labels both the container and SVG creation as Step 2. The source comments follow that numbering, with the test rectangle labelled Step 3. Step 4 in the brief is to commit the completed code.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Website content, script references, and the empty container D3 selects. |
| `style.css` | Website styling and responsive SVG sizing. |
| `js/main.js` | Appends the SVG, its accessible description, and the test rectangle. |

## Run locally

Open this folder in VS Code and use **Open with Live Server** on `index.html`. An internet connection is needed to load D3 v7 from `https://d3js.org/d3.v7.min.js`.

Alternatively, if Python is installed, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

Use a local HTTP server throughout these exercises so that later CSV-loading code can request the data files.

## Check the result

- Select **See the D3 example** to jump to the exercise section.
- Confirm a black border surrounds the SVG and a thin blue rectangle appears near its top-left corner. The large empty area below it is intentional: the required canvas is 1200 by 1600 units.
- Resize the browser. The SVG and rectangle should scale together, retaining their proportions.
- Inspect the container in browser developer tools to see the `svg` and `rect` elements D3 added to the DOM.

The rectangle is a setup test and does not represent a measured energy value.

## AI declaration

OpenAI Codex was used to review and refine my existing Exercise 4.3 implementation after I had followed the assignment steps. I supplied the exercise brief and asked for refinements, meaningful comments, and a README containing an AI declaration.

The AI-assisted changes include:

- Updating the page labels from Exercise 4.2 to Exercise 4.3 and fixing the link to the visualisation section.
- Improving source formatting and removing unused styles from the previous exercise.
- Adding comments explaining script loading, the SVG container, the `viewBox`, and rectangle attributes.
- Making SVG sizing explicit in CSS and adding an accessible title and description.
- Writing this README, including the setup instructions and AI declaration.

The core D3 setup was already present before this assistance: selecting the container, appending the SVG, and drawing the rectangle with the dimensions specified in the brief. The refinement preserves those values. No CSV processing or completed data-driven bar chart was generated for this exercise.
