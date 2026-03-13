# vanilla-js-template

## This template includes:

### 1. Webpack:
- HTML handling: `src/template.html` is the template HTML file for the project;
- CSS handling;
- Image handling;
- Source Map for debugging;
- Webpack Dev Server;
- `index.js` is the JavaScript file entrypoint;
- npm scripts: 
    - `npm run dev`: Starts the local Webpack dev server. The app will automatically reload in the browser when you save file changes,

    - `npm run build`: Compiles and minifies the application for production. The final, optimized files will be generated in the `dist` folder, ready for deployment.

### 2. ESLint:
- **Modern Flat Config:** Uses the latest `eslint.config.js` configuration standard.
- **Multi-file Linting:** Configured to check and catch syntax/logic errors in JavaScript, JSON, and CSS files.
- **Browser Environment:** Pre-configured for browser environments (recognizes global variables like `window` and `document`).
- **ES Modules Ready:** Fully supports modern `import` and `export` syntax (`"type": "module"`).
- **Smart Ignores:** Automatically ignores the `dist/` and `node_modules/` directories to avoid linting compiled or external code.
- npm scripts:
    - `npm run lint`: Scans the entire project directory and reports any syntax or logic problems found by the linter.
