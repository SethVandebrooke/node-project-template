## Adding a `.js` file to your project

This tutorial walks you through the steps to making sure you are getting the most out of the documentation system.

If you added a `.js` file to your `./src` directory and it isn't getting compiled or documented correctly... Make sure you are following these steps:

1. Create your file (`myfile.js`).
1. Update the `Gruntfile.js` file to include your new file.
  1. If you want your source files to be added together into a single file, that is already set up with the *concat* plugin. You can simply add your file to the array of files to concat.
  1. If you want the file to be output seperately, you will have to alter the configuration ([learn how here](https://gruntjs.com/configuring-tasks)).
1. Add the file to the `generate-walkthroughs` command in the `package.json` file.
1. Add the walkthrough to the navigation menu by adding it to the `./docs/dev-docs-template/static/js/nav.config.js` file.
  1. In the `Walkthroughs` object, add your file like so: `"myfile.js": "#./walkthrough/src/myfile.html"`.
  1. Make sure you are using the `#` at the beginning of the relative path. It ensures that the view will be loaded dynamically.
1. Write your tests in the `./tests/` directory using jest!

## Done!

Once that's done, everything else is automated!

### Why isn't it completely automated?

If it were entirely automated, you would have less control over the process.
Also, as far as `docco` goes... It doesn't support globs, so you have to specify each file individually :(
