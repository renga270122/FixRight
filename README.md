
# FixRight — MVP Website

Minimal static site for FixRight (HTML/CSS/JS) — lightweight, responsive, and easy to extend.

What’s included
- **Hero banner**: Logo, tagline and strong background image with CTA.
- **Product grid**: Catalog-style grid showcasing paints, brushes, and tools.
- **About**: Short story about FixRight’s reliability and service.
- **Contact**: Address, phone, WhatsApp link, and embedded Google Maps.
- **Footer**: Quick links, copyright, and social icon placeholder.

Quick start

1. Open `index.html` in a browser for a fast preview.
2. Or run a simple static server from the project root:

```powershell
# Start a simple Python static server
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

Files in this project

- `index.html` — main markup (hero, products, about, contact, footer)
- `css/styles.css` — styles for layout, hero, product grid, and responsive rules
- `js/script.js` — small interactions (dynamic year, smooth scroll)
- `assets/logo.svg` — simple SVG logo

Customization notes
- Change the hero background by editing the inline `background-image` URL in `index.html` header, or move it into CSS.
- Update the Google Maps embed in the `iframe` `src` to point to your real address or a Google Maps embed link.
- Add product data later as a JSON file and render the grid dynamically with `js/script.js`.

Next steps (optional)
- Add a static contact form (client-side) or integrate a backend / serverless function to receive messages.
- Create a `products.json` and load products dynamically for easier updates.

Questions or changes? Tell me which feature you want next (contact form, product data, deployment steps).
