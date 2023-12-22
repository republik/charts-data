# Charts Data

Data wrangling scripts for articles.

This repo uses [arquero](https://uwdata.github.io/arquero/), which can transform data efficiently, similar to what's possible in R, but using JavaScript instead.

To get an overview of how to do common data transformation tasks with it, check out the [Tidy Data in JavaScript](https://observablehq.com/@uwdata/tidy-data-in-javascript?collection=@uwdata/arquero) guide.

## Structure

Each article should live in a folder that is prefixed with its date in `YYYY-MM` and using the Publikator repo slug, so it's straightforward to identify.

Inside each folder we use this structure (or something else that makes sense):

- `in/`: un-transformed source files go here
- `out/`: transformed files go here (usually generated)
- `tidy.mjs`: the script which transforms data from `in/` to `out/`
- `README.md`: anything useful (Publikator URL, source data, instructions, ...)
