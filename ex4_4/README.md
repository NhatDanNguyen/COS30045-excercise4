# Exercise 4.4 — Load data from CSV

**Unit:** COS30045 — Data Visualisation

This exercise loads TV brand counts from CSV and prepares the data for a D3 bar chart. It builds on the responsive SVG and test rectangle from Exercise 4.3. The data-driven bar chart will be implemented in the next exercise.

## Exercise steps

1. Load `data/tvBrandCount.csv` using `d3.csv()` with a row conversion function.
2. Keep `brand` as a string and convert `count` to a number using `+d.count`. The property names match the CSV headers exactly.
3. Log the typed data, number of brands, maximum, minimum, and extent to the browser console.
4. Sort the array by count in descending order and display it with `console.table()`.
5. Call `drawBarChart(data)` inside `.then()` after the CSV has loaded. The function is a placeholder that displays the loading result; it does not draw bars yet.

The page reports loading success or failure. The blue rectangle remains a hard-coded SVG setup test and does not represent CSV values.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content, ordered D3 scripts, loading status, and SVG container. |
| `style.css` | Existing website layout, loading status, and responsive SVG sizing. |
| `js/main.js` | SVG setup, CSV conversion, console statistics, sorting, and chart placeholder. |
| `data/tvBrandCount.csv` | Supplied TV brand summary with the headers `brand,count`. |

The brief describes exporting a summary table from the supplied KNIME workflow using a CSV Writer with **Quote values: Never**. The existing CSV was retained during this refinement; the KNIME workflow was not run or modified as part of the AI assistance.

## Run and check

Open this folder in VS Code and select **Open with Live Server** on `index.html`. Alternatively, run the following command from this folder and visit `http://localhost:8000`:

```sh
python -m http.server 8000
```

Use an HTTP server so D3 can request the CSV. An internet connection is required to load D3 v7 from `https://d3js.org/d3.v7.min.js`.

Open the browser developer tools and select **Console**. The supplied dataset should produce:

| Check | Expected result |
| --- | --- |
| Number of brands | `25` |
| Maximum count | `1096` |
| Minimum count | `24` |
| Extent | `[24, 1096]` |
| First row after sorting | `samsung`, `1096` |
| Count type | `number` |

The exercise panel should report that 25 brands were loaded and sorted. The console table should list counts from largest to smallest without an undefined-function error.

## AI declaration

**AI tool:** OpenAI Codex.

OpenAI Codex was used to review and refine the existing Exercise 4.4 work against the assignment brief, improve comments and formatting, and write this README and AI declaration.

Before this assistance, the work already included the SVG setup and test rectangle, the supplied CSV, and code to load the CSV, convert counts to numbers, log the data and basic statistics, sort by descending count, and call `drawBarChart(data)`.

AI-assisted changes in this update include:

- Adding comments explaining CSV paths, row conversion, asynchronous loading, and sorting.
- Adding the missing `d3.extent()` output, descriptive console labels, and a sorted console table.
- Defining the `drawBarChart(data)` placeholder to resolve the previously undefined function while leaving bar drawing for the next exercise.
- Adding CSV error reporting and an accessible loading status.
- Updating the page metadata, headings, and descriptions to Exercise 4.4.
- Writing the documentation and expected checks in this README.

The existing CSV values and SVG test dimensions were preserved. Earlier AI assistance with the website and SVG setup is documented in the READMEs for Exercises 4.2 and 4.3.
