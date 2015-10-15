/**
 * Module dependencies
 */

var should = require('should');
var template = require('../lib/template');

describe('template', () => {
  it('should generate a component template ', () => {
    template('Alert').should.equal(
`/**
 * Module dependencies
 */

import React, { Component } from 'react';

/**
 * Alert component
 */

export default class Alert extends Component {
  render() {
    return <h1>Alert</h1>;
  }
}`
    );
  });
});
