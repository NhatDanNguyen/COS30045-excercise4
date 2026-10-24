# COS30045 — Exercise 4.2: Manipulate and Add Elements with D3

## Overview
This is a basic **TV energy consumption** website created for Exercise 4.2. It demonstrates how D3.js can select existing elements, change CSS styles, and append new HTML and SVG elements to the document object model (DOM).

## Files
- `index.html` — Webpage structure, including a `<div>` and an empty `<svg>`.
- `style.css` — Layout and visual styling.
- `js/main.js` — All D3 code for this exercise (separate from the HTML).

## Exercise steps completed
1. **Load D3:** The HTML loads `https://d3js.org/d3.v7.min.js` and then `js/main.js`.
2. **Change styles:** D3 changes the colour of `#d3-heading` and the letter spacing of `.card-number` elements.
3. **Append a paragraph:** D3 appends a new `<p>` element with the energy-saving message inside `#d3-message`.
4. **Append an SVG rectangle:** D3 creates a `<rect>` inside `#energy-svg` with `x=50`, `y=50`, `width=100`, `height=30`, and green fill.

## How to run
Open `index.html` in a browser with an internet connection (needed for the D3 CDN). Open browser Developer Tools (F12), select **Elements**, and inspect `#d3-message` and `#energy-svg` to confirm that D3 appended the elements.

## AI use declaration
**AI tool:** OpenAI ChatGPT.

ChatGPT assisted with generating the initial HTML structure, CSS styling, and the JavaScript code used to implement the D3 selection, styling, and append operations described in Exercise 4.2. It also assisted in writing this README. The topic, requirements, and exercise steps were supplied by the author from the COS30045 exercise brief and was reviewed carefully by the author.
No external TV energy dataset is used in this exercise. The text about television energy use is general educational guidance, not a quantitative analysis.
