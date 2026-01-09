## Real Estate Search Page (Vue + Vite)

This project implements a responsive real-estate search experience inspired by the Houzeo design. It is built with **Vue 3**, **TypeScript**, and **Vite**.

### Setup

1. **Install dependencies**

```bash
cd D:\VueApp
npm install
```

2. **Run the development server**

```bash
npm run dev
```

Then open the printed local URL (for example `http://localhost:5173`) in your browser.

### Features

- **Header** with centered logo.
- **Filter bar** with status, price filters, search field, and saved button; hover transitions on all inputs.
- **Map section** using an embedded Google Map (interactive zoom & pan).
- **Property listing cards** with:
  - Image slider (arrows and dots appear on hover).
  - Property meta (type, price, beds, baths, square footage, address, days on market).
  - Favorite heart with CSS pulse effect on hover.
  - Card-level hover shadow and lift.
- **Responsive design**:
  - Desktop layout with map on the left and listings on the right.
  - Mobile layout (tested against iPhone 14 Pro Max width) with stacked cards and map section below.
- **Performance**:
  - Property images use `loading="lazy"` for faster initial page load.

### Notes

- Sorting dropdown is **presentational only**, as requested (no sorting logic tied to UI choice yet).
- Map is embedded via Google Maps iframe for basic interactions (zoom, pan, etc.) without an API key.

