# Weather App

A responsive, client-side weather application built with vanilla JavaScript. It fetches and displays real-time weather data based on city search queries.

**Live Demo:** [https://dariusjderu1.github.io/weather-app/](https://dariusjderu1.github.io/weather-app/)

## Technologies & Tools Used

* **JavaScript (ES6+):** Utilizes ES Modules for code splitting, async/await for asynchronous API calls, and the Fetch API.
* **CSS3:** Built with native CSS, utilizing custom properties (variables), modern nesting, and responsive sizing with `clamp()`.
* **Webpack 5:** Used as the module bundler to compile and serve the project. Configured for both development (with Webpack Dev Server) and production builds.
* **ESLint:** Configured with the flat config system (`eslint.config.js`) for code quality and consistency across JavaScript, JSON, and CSS files.
* **API:** Visual Crossing Weather API.

## Features

* Search functionality for retrieving weather by city name.
* Displays current temperature, feels-like temperature, humidity percentage, and wind speed.
* Error handling for invalid inputs or unfound cities.