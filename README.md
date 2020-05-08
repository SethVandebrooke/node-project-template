# node-project-template
Jump start to creating a nodejs project with testing, documentation, and reports.

### Documentation

The out of the box documentation system uses JSDoc to crawl through the src directory and generate reference documentation based on the JSDoc comments used in the source code. JSDoc is pre-configured to use the docstrap template which includes basic navigation and text search. By default, the homepage contains links that point to the auto generated reports.

### Reports

This project is automatically set up to use Jest and JS Code Metric to generate complexity, lint error, maintainability, error probability, and code coverage reports. These reports are very useful for getting a bird's eye view of your project as well as detail oriented information, alerts, and suggestions.

### Testing

By defualt, the pre-installed and configured testing suite is Jest. This can be changed, but keep in mind that Jest was chosen for a few reasons:

- Jest comes packed with istanbul for generating code coverage reports
  - The code coverage report is configured to output to the documentation website directory, and the homepage is already pointing to it.
- Jest allows for multiple test writting styles, including Jasmine.
- Jest is especially good at clearly pointing out context when things break, better than anything else I've used for NodeJS.

### Generating the documentation

The documentation generation is already pre-configured and ready to go, all you have to do is run the following command in the project directory: `npm run generate-docs`