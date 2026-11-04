# Galaxy & Solar System Motion Lab

[繁體中文](README.md) · [English](README.en.md)

### 🌌 [Launch the Interactive Simulator (Live Demo)](https://ghostfung.github.io/galaxy-solar-system-motion-lab/)

> 💻 **For the best experience, please use a desktop browser (Chrome, Edge, or Firefox).** This project features real-time 3D rendering, free-camera navigation, and interactive controls. Mobile and tablet experiences may be limited by screen size and device performance.

An interactive browser-based 3D astronomy visualization. Explore the eight planets, the Earth–Moon system, Halley's Comet, Voyager 1, the Milky Way, nearby dwarf galaxies, Andromeda, black-hole visuals, and the three stars of Orion's Belt.

> **Educational visualization, not a precision N-body simulator.** Celestial sizes, orbital distances, interstellar distances, and intergalactic scales are intentionally adjusted to make objects visible and accessible. Some trajectories and visual effects are schematic; see [Science Notes](SCIENCE_NOTES.md).

## Features

- **3D planetary orbits** with approximate JPL orbital elements, distinct ascending nodes and perihelion directions, side-on views and inclination exaggeration.
- **Earth–Moon lab** with orbital motion, approximate lunar phases, and schematic eclipse-alignment conditions.
- **Galaxies** including the Milky Way's center, Andromeda, Triangulum, and dwarf galaxies, with bilingual information cards.
- **Orion's Belt**: Alnitak, Alnilam and Mintaka, including a Sun-direction view and an oblique 3D comparison.
- **Camera and timeline controls**: free flight, physical-time and demonstration modes, speed, zoom, focus selection and guided tour.
- **Display options**: motion trails, planetary and Halley orbit lines, ecliptic plane and galactic grid.
- **Traditional Chinese / English** user interface.
- **Astronomical photos and illustrations** with separate attribution and licensing requirements documented in [ASSETS_CREDITS.md](ASSETS_CREDITS.md).

## Run locally

No build step, package manager, or database is needed.

1. Download the repository contents.
2. Open `index.html` in a modern Chrome, Edge, or Firefox browser.
3. **An internet connection is required** for Three.js, Tailwind CSS, fonts, and most information-card images.
4. If your browser restricts `file://` pages, start a local static server:

   ```bash
   python -m http.server 8000
   ```
   Open `http://localhost:8000/`.

**Live version:** Open the [GitHub Pages simulator](https://ghostfung.github.io/galaxy-solar-system-motion-lab/) without downloading or installing anything. To host your own copy, see [PUBLISHING.md](PUBLISHING.md).

## Default settings

| Setting | Default |
| --- | --- |
| Time mode | Physical |
| Camera focus | Sun |
| Simulation speed | 0.1 years / second |
| Zoom | 50% |
| Motion trails | On |
| Planetary and Halley orbit lines | Off (user-toggleable) |
| Ecliptic and galactic grids | Off (user-toggleable) |

## Technology

- Vanilla HTML, CSS and JavaScript
- [Three.js](https://threejs.org/) r128 (external CDN)
- [Tailwind CSS](https://tailwindcss.com/) (external CDN)
- Google Fonts (external)

The main program is kept in one HTML file for easy experimentation. Contributions that improve maintainability without breaking established behavior are welcome.

## Scientific limitations

Planetary orbital data are approximate. Object radii and distances are **not to a single real-world scale**. Galactic motion, black-hole lensing and eclipse visualizations are educational approximations rather than high-precision astrophysical calculations. See [SCIENCE_NOTES.md](SCIENCE_NOTES.md).

## Contributing

Issues, pull requests, forks, and educational adaptations are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). For new photographic assets, include their original source page, author/credit, licensing terms, and any required notices.

## License and media credits

Project-authored code and documentation: **[MIT License](LICENSE)**. External media and third-party libraries have **separate rights and conditions** and are **not automatically MIT-licensed**; see [ASSETS_CREDITS.md](ASSETS_CREDITS.md). The Orion's Belt photograph is CC BY-SA 4.0.

No NASA, ESA, ESO, NOIRLab, or third-party endorsement is claimed.

**Release status:** v1.0.0 publicly available source release based on the V11 simulator. Publisher credits and visible media-license links have been reviewed. The embedded Basemap Data/NASA Earth texture provenance and remote image availability still require ongoing verification in the publicly available release.
> **Media rights**: The globe contains NASA Blue Marble imagery from a Basemap Data distribution (LGPL). ESA's Giotto photograph also has separate usage terms; see [ASSETS_CREDITS.md](ASSETS_CREDITS.md).
