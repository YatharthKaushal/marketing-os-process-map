# Marketing OS · Process map

Live: https://yatharthkaushal.github.io/marketing-os-process-map/

Pannable, zoomable map of the **planned** Marketing OS: the brand journey and the agency workflow, from winning a client to the next cycle. 13 stages (0 to 12) run left to right, and the people and systems run top to bottom in 11 lanes. Click any node or arrow for its role, purpose, who does it, the tools that help, limits and how AI helps. The Glossary button explains abbreviations.

The **Document** page (`doc.html`) holds the Simple SRS and the HLD, MLD, LLD doc.

Static page, no build: `index.html` + `style.css` + `data.js` + `guide.js` + `app.js` + `fonts/`. The flow is in `data.js`. The working guide shown in the right drawer is in `guide.js`.
`meta.single = true` draws one graph. `meta.stageBase = 0` numbers stages from 0 to match the docs.

## Run locally
    python -m http.server 8080      # open http://localhost:8080
(or just double-click `index.html`)

## Deploy
Vercel: import the repo, Framework Preset *Other*, leave build and output empty (`vercel.json` sets them).
Render: New > Static Site (or Blueprint with `render.yaml`), Publish Directory `.`.

## Notes
Built from the two docs, not from code, because the product is not built yet. `Source` in the panel names the doc section. The `app.js` engine comes from `nine-hawks-process-map`, with optional label overrides read from `meta.labels` and `meta.tags`, and `meta.stageBase`.
