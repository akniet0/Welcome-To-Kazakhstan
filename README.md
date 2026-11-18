# Visit Kazakhstan — Explore the Great Steppe

An interactive, multi-page, multilingual tourism web portal showcasing the geography, history, culture, seasonal travel guides, and architectural landmarks of Kazakhstan—featuring a dedicated deep-dive guide into the capital city, Astana.

**Live Website:** [https://akniet0.github.io/Welcome-To-Kazakhstan/](https://akniet0.github.io/Welcome-To-Kazakhstan/)

---

## Pages Overview

* **`index.html` (Home / National Portal):** Hero banner, interactive regional map of Kazakhstan with region previews, animated statistics counters, searchable FAQ section, and contact modal.
* **`astana.html` (Astana Capital Guide):** Architectural highlights, districts, and visitor essentials for the capital city.
* **`attractions.html` (Attractions & Landmarks):** Interactive directory of major landmarks with architectural details, public transport info, live search filtering, and autocomplete suggestions.
* **`history.html` (History & Culture):** Chronological historical timeline, traditional nomadic cuisine showcase, and an interactive Kazakh phrasebook with copy-to-clipboard support.
* **`seasons.html` (Seasons & Calendar):** Seasonal travel recommendations, climate insights, and cultural festivals across spring, summer, autumn, and winter.
* **`tours.html` (Tours & Booking):** Guided tour packages comparison table, travel sidebar widget, and an interactive tour booking/inquiry form.

---

## Key Features

* **Responsive Multi-Device Design:** Built with semantic HTML5, Bootstrap 5, CSS Grid, and Flexbox to adapt seamlessly across mobile, tablet, and desktop screens.
* **Persistent Light & Dark Modes:** Theme switcher (`body.dark-theme`) stored in `localStorage` so user preference persists across all pages.
* **Multilingual Support (`EN` / `RU` / `KZ`):** Dynamic client-side translation engine (`js/translations.js`) supporting English, Russian, and Kazakh without page reloads.
* **Client-Side Authentication (`localStorage`):** Sign Up, Log In, and user profile session handling stored locally in the browser.
* **Custom JavaScript Form Validation:** Validates required fields, email formatting, password strength, and phone patterns using `novalidate` and inline error messages.
* **Live Search & Autocomplete:** Real-time filtering and keyword highlighting for attractions and FAQs.
* **External Public API Integration:** Asynchronous data fetching via `fetch()` / `async-await` with loading states and error handling.
* **Interactive UI Effects:** Scroll progress indicator, animated counters, lazy-loaded images, form loading spinners, and toast notifications.

---

## Project Structure

```text
Welcome-To-Kazakhstan/
├── css/
│   └── style.css          # Custom styling, CSS variables, responsive rules, dark theme
├── js/
│   ├── script.js          # Core interactivity, validation, search, auth, API integration
│   └── translations.js    # EN / RU / KZ multilingual dictionary and switcher logic
├── images/                # Custom SVG logo, landmark photography, and visual assets
├── index.html             # National portal & interactive map of Kazakhstan
├── astana.html            # Astana capital city guide
├── attractions.html       # Landmarks directory with live search
├── history.html           # Historical timeline, cuisine & phrasebook
├── seasons.html           # Seasonal travel guide & calendar
├── tours.html             # Tour packages & validated booking form
└── README.md              # Project documentation