
## Stack

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- Fixtures

---

## Project structure

    tests

    └── fixtures

        ├── pages.js # Custom fixtures
        └── testEnv.js # Browser context setup

    ├── pages

        └── searchMap
        ├── SearchMapPage.js    
        └── components
            ├── SearchBar.js 
            ├── FiltersPanel.js
            ├── ResultsList.js
            └── MapPanel.js
    ├── specs

        ├──searchMapTests

            └── smoke.search-map.spec.js

    playwright.config.js

    package.json

    README.md

---
## Install

- npm install
- npx playwright install

---
## Run

- Run all tests: npx playwright test
- Run tests with browser: npx playwright test --headed
- Open report: npx playwright show-report
- Run UI mode: npx playwright test --ui








