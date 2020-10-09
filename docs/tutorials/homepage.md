# Calculator
Calculator is a module that provides basic methods of calclulation.

## Documentation

The out of the box documentation system uses [JSDoc](https://jsdoc.app/) to crawl through the src directory and generate reference documentation based on the JSDoc comments used in the source code. JSDoc is pre-configured to use the [DocStrap](https://github.com/docstrap/docstrap) template which includes basic navigation and text search. By default, the homepage contains links that point to the auto generated reports.

#### Tutorials
Any tutorials (or guides) can be created by making Markdown, HTML, or XML files and placing them in the tutorials directory. For more information on configuring this feature, check out the JSDoc documentation: [JSDoc Tutorials](https://jsdoc.app/about-tutorials.html)

### Reports

This project is automatically set up to use [Jest](https://jestjs.io/) and [JS Code Metric](https://www.npmjs.com/package/js-code-metric) to generate complexity, lint error, maintainability, error probability, and code coverage reports. These reports are very useful for getting a bird's eye view of your project as well as detail oriented information, alerts, and suggestions.

A nice feature that JS Code Metric provides is tracking complexity and maintainability over time. It saves analysis data and generates charts to display the history of your project's progress.

### Testing

By defualt, the pre-installed and configured testing suite is Jest. This can be changed, but keep in mind that Jest was chosen for a few reasons:

- Jest comes packed with istanbul for generating code coverage reports
  - The code coverage report is configured to output to the documentation website directory, and the homepage is already pointing to it.
- Jest allows for multiple test writting styles, including Jasmine.
- Jest is especially good at clearly pointing out context when things break, better than anything else I've used for NodeJS.

### Generating the documentation

The documentation generation is already pre-configured and ready to go, all you have to do is run the following command in the project directory: `npm run generate-docs`

## Project Commands

The project has a number of out of the box commands for performing a few handy operations.

- `npm run start` does what you would expect: runs index.js 
- `npm run build` runs babel, converting all source code in the src directory to ES15, adds all files mentioned in the Gruntfile.js file together, and minifies the result (placing the final file in the dist directory). 
- `npm run dependency-audit` dedupes, prunes and fixes known dependecies issues
- `npm run js-code-metric` generates the metric reports
- `npm run jsdoc` generates the reference documentation
- `npm run test` runs all tests and generates code coverage report
- `npm run generate-docs` runs the last three commands, fully generating the documentation website

---

### Credit

A big thank you to everyone who created and contributed to the following projects that made this one possible!

- [JSDoc](https://jsdoc.app/)
- [DocStrap](https://github.com/docstrap/docstrap)
- [Jest](https://jestjs.io/)
- [Istanbul](https://istanbul.js.org/)
- [JS Code Metric](https://www.npmjs.com/package/js-code-metric)
- [Babel](https://babeljs.io/)
- [Grunt](https://gruntjs.com/)