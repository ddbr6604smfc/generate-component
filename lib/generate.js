/**
 * Module dependencies
 */

var fs = require('fs');
var mkdirp = require('mkdirp');

/**
 * Expose `generate`
 */

module.exports = generate;

/**
 * Generate `name` component & save it with `filename`
 *
 * @param {String} name
 * @param {String} baseDirectory
 */

function generate(name, baseDirectory) {
  if (!name) {
    return Promise.reject('Component name is required');
  }

  name = capitalize(name);

  var template = generateTemplate(name);
  return writeTemplate(name, template, baseDirectory)
}

/**
 * Generate a component template`
 *
 * @param {String} [name]
 * @returns {String}
 */

function generateTemplate(name) {
  return (
`/**
 * Module dependencies
 */

import React, { Component } from 'react';

/**
 * \`${name}\` component
 */

export default class ${name} extends Component {
  render() {
    return <h1>${name}</h1>;
  }
}`
  );
}

/**
 * Write component template to disk
 *
 * @param {String} name
 * @param {String} template
 * @param {String} baseDirectory
 * @returns {Promise}
 */

function writeTemplate(name, template, baseDirectory) {
  return new Promise((resolve, reject) => {
    var componentsDirectory = `${baseDirectory}/src/components`;
    var filename = `${componentsDirectory}/${name}.js`;

    mkdirp(componentsDirectory, (error) => {
      if (error) {
        return reject(error);
      }

      fs.writeFile(filename, template, (error) => {
        if (error) {
          return reject(error);
        }

        resolve(filename);
      });
    });
  });
}

/**
 * Capitalize `string`
 *
 * @param {String} string
 * @returns {String}
 */

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
