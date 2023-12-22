# Charts Data

Data wrangling scripts for articles

This repo uses [arquero](https://uwdata.github.io/arquero/), with which we can transform data efficiently, similar to what's possible in R, but using JavaScript instead.

## Structure

Each article should live in a folder that is prefixed with its date in `YYYY-MM` and using the Publikator repo slug, so it's straightforward to identify.

Inside each folder we use this structure (or something else that makes sense):

- `in/`: un-transformed source files go here
- `out/`: transformed files go here (usually generated)
- `tidy.mjs`: the script which transforms data from `in/` to `out/`
- `README.md`: anything useful (Publikator URL, source data, instructions, ...)
