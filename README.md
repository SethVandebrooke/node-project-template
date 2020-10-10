# node-project-template
Jump start to creating a nodejs project with testing, documentation, and reports.

## Features

Out of the box...

- **Grunt and Babel**, set up for pollyfilling, minifying and versioning builds
- **Seperation between public and private documentation** so users see what's important and you see everything
- **Multi-version support** for releases and public documentation
- **JSDoc** documentation + static documentation support
  - Add static web pages to your jsdoc generated site easily
- **Auto-generated Source code walkthroughs** using docco
- **Source code analysis** using JS Code Metric
- **Automated tests** using Jest
- **Code coverage** using Istanbul
- **Test result analysis** using Jest Stare
- **Automated readme generation** using doccomentation
- **Fully Exstensible** built for easy integration with other third party or custom tools
  - Point other tools that generate html pages for doccumentation to your docs path and add it to the navigation config file
## Documentation

The out of the box documentation system uses [JSDoc](https://jsdoc.app/) to crawl through the src directory and generate reference documentation based on the JSDoc comments used in the source code. JSDoc is pre-configured to use the [DocStrap](https://github.com/docstrap/docstrap) template which includes basic navigation and searching capabilities. By default, the navigation includes the auto generated reports and source code walkthroughs. The walkthroughs are generated using [docco](https://www.npmjs.com/package/docco). 

#### Readme generation

The `README.md` is auto generated using the `./docs/config/dev-homepage.md` file and [doccomentaton](https://www.npmjs.com/package/doccomentation).

#### Extending the documentation

The documentation template can be altered to fit any need, but somethings are easier to change than others.

You can add additional sections and pages to the documentation and edit the existing ones by creating/editing files in the `./docs/dev-docs` directory and editing the site navigation via the `./docs/dev-docs-template/static/js/nav.config.js` config file.
This allows you to not only add static pages but also integrate other third party or custom tools into the site!

#### Tutorials
Any tutorials (or guides) can be created by making Markdown, HTML, or XML files and placing them in the tutorials directory. For more information on configuring this feature, check out the JSDoc documentation: [JSDoc Tutorials](https://jsdoc.app/about-tutorials.html)

### Reports

This project is automatically set up with [Jest](https://jestjs.io/), [JS Code Metric](https://www.npmjs.com/package/js-code-metric), and [Jest Stare](https://www.npmjs.com/package/jest-stare) to generate complexity, lint error, maintainability, error probability, code coverage, and test result reports. These reports are great for getting a *bird's eye view* of your project as well as detail oriented information, warnings, and suggestions.

A nice feature that JS Code Metric provides is tracking complexity and maintainability *over time*. It saves analysis data and generates charts to display the history of your project's progress.

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
- [Jest Stare](https://www.npmjs.com/package/jest-stare)
- [Babel](https://babeljs.io/)
- [Grunt](https://gruntjs.com/)
- [docco](https://www.npmjs.com/package/docco)
- [doccomentaton](https://www.npmjs.com/package/doccomentation)

---

<a name="Calc"></a>

### Calc
**Kind**: global class  

* [Calc](#Calc)
    * [new Calc()](#new_Calc_new)
    * [.add(a, b)](#Calc+add) ⇒ <code>number</code>
    * [.subtract(a, b)](#Calc+subtract) ⇒ <code>number</code>

<a name="new_Calc_new"></a>

#### new Calc()
Calcualtor instance

**Example**  
```js
var calculator = new Calc();
```
<a name="Calc+add"></a>

#### calc.add(a, b) ⇒ <code>number</code>
Add two numbers together

**Kind**: instance method of [<code>Calc</code>](#Calc)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>a</td><td><code>number</code></td><td><p>first number to add</p>
</td>
    </tr><tr>
    <td>b</td><td><code>number</code></td><td><p>second number to add</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
var calculator = new Calc();calculator.add(2, 2); // 4
```
<a name="Calc+subtract"></a>

#### calc.subtract(a, b) ⇒ <code>number</code>
Subtract one number from another

**Kind**: instance method of [<code>Calc</code>](#Calc)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>a</td><td><code>number</code></td><td><p>the number to start with</p>
</td>
    </tr><tr>
    <td>b</td><td><code>number</code></td><td><p>the number to subtract from the first number</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
var calculator = new Calc();calculator.subtract(4, 2) // 2
```
