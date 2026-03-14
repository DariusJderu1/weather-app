# Weather App

A vanilla JavaScript weather application built to practice asynchronous data fetching and modern front-end tooling. 

## Project Overview

The codebase is structured around Separation of Concerns to keep the logic organized and maintainable. The application is divided into specific ES6 modules:
* **API Module:** Handles network requests and data parsing independently.
* **UI Module:** Manages DOM manipulation, event listeners, and rendering data or error states.
* **Helper Module:** Contains utility functions, such as formatting city names before making API calls.

Webpack is used to bundle these JavaScript modules and CSS files together. This setup manages dependencies cleanly and provides a local development server for a smoother workflow.

## Technical Details

* **Async JavaScript:** Uses `async/await` and the native `fetch` API to retrieve data from the Visual Crossing Weather API. 
* **Error Handling:** Implements `try/catch/finally` blocks to manage execution flow. API errors or invalid searches are caught and displayed gracefully on the UI, followed by an automatic form reset.
* **Responsive CSS:** The layout utilizes CSS `clamp()` functions for typography, padding, and spacing, allowing the UI to scale fluidly across different screen sizes.
* **Linting:** ESLint is configured to enforce consistent coding standards across the project.

## How to run locally

1. Clone the repository.
2. Run `npm install` to install dependencies (Webpack, ESLint).
3. Run `npm run start` (or the equivalent dev script in `package.json`) to start the Webpack development server.