# Webpack Boilerplate

This repository contains a Webpack-based project setup configured for modern JavaScript, SCSS development, and includes
tools for linting, asset handling, and production optimization.

## Features

- **JavaScript (ES6+) Compilation**: Uses `swc-loader` for fast ES6+ transpilation.
- **SCSS Compilation**: Supports SCSS compilation with `sass-loader`, `postcss-loader`, and auto-prefixing via `autoprefixer`. Also includes `cssnano` for CSS optimization and `postcss` for enhanced CSS processing.
- **Linting**: ESLint and Stylelint are included for JavaScript and SCSS linting, with different modes for development and production.
- **Image & Font Handling**: Processes images and fonts, organizing them into specific directories.
- **HTML Template**: Generates an HTML file based on a template using `html-webpack-plugin`.
- **Source Maps**: Enabled in development mode for easier debugging.
- **Hot Module Replacement**: Integrated for fast development.
- **Unit Testing**: Jest is integrated for JavaScript unit testing.

## Installation

Clone the repository:

```bash
   git clone https://github.com/denis-axenov/webpack-boilerplate.git
```

Install dependencies:

```bash
  npm install
```

## Available Scripts

### Development

Run the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

This will start the development server on http://localhost:9000 with live reload and source maps enabled.

To run the development server with linting enabled for both JavaScript and SCSS files:

```bash
npm run dev:lint
```

This mode will lint the code during the build process while running the development server, ensuring that you are alerted to any issues in real-time.

### Watching Files

For continuous builds without the development server:

```bash
npm run watch
```

To watch files and run linting simultaneously:

```bash
npm run watch:lint
```

This will automatically lint both JavaScript and SCSS files as they change, in addition to building them.

### Production Build

To generate an optimized production build, run:

```bash
npm run build
```

This will compile the assets, optimize CSS and JavaScript, and prepare everything in the dist/ folder.

### Linting

#### Running Linting Manually

To run ESLint and Stylelint for checking JavaScript and SCSS files:

```bash
npm run lint
```

#### Auto-Fixing Linting Issues

If you want to automatically fix the linting issues, run:

```bash
npm run lint:fix
```

This will apply auto-fixes where possible for both JavaScript (ESLint) and SCSS (Stylelint) files.

### Testing with Jest
#### Running Unit Tests
Jest is configured for running unit tests. To run tests:

```bash
npm run test
```

This command will execute all test files in the `__tests__/` directory or any file with a `.test.js` or `.spec.js` extension.

#### Running Tests in Watch Mode
To continuously run tests as files change:

```bash
npm run test:watch
```
This will re-run the tests every time you make changes to the codebase.

#### Generating Coverage Report
To generate a coverage report for your tests:

```bash
npm run test:coverage
```
This will create a coverage report in the `coverage/` directory, showing how much of the code is covered by tests.

## Repository

URL: [Webpack Boilerplate](https://github.com/denis-axenov/webpack-boilerplate)

## Issues

If you encounter any issues or have suggestions, please file an issue in the repository's [issue tracker](https://github.com/denis-axenov/webpack-boilerplate/issues).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/denis-axenov/webpack-boilerplate/blob/main/LICENSE) file for more details.