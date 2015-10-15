/**
 * Generate a component template
 *
 * @param {String} name
 * @returns {String}
 */

module.exports = function template(name) {
  return (
`/**
 * Module dependencies
 */

import React, { Component } from 'react';

/**
 * ${name} component
 */

export default class ${name} extends Component {
  render() {
    return <h1>${name}</h1>;
  }
}`
  );
}
