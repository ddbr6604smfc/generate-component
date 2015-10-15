/**
 * Module dependencies
 */

var template = require('./template');
var write = require('./write');

/**
 * Generate a component template and save it the components directory
 *
 * @param {String} name - component name
 * @param {String} [directory] - root directory of project
 * @returns {Promise}
 */

module.exports = function generate(name, directory) {
  directory = directory || process.cwd();

  var componentName = capitalize(name);
  var componentTemplate = template(componentName);
  var componentFilename = `${directory}/src/components/${componentName}.js`;

  return write(componentTemplate, componentFilename);
}

/**
 * capitalize a `string`
 *
 * @param {String} string - to be capitalized
 * @returns {String}
 */

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
