/**
 * Module dependencies
 */

var fs = require('fs');
var rimraf = require('rimraf');
var should = require('should');
var generate = require('../lib/generate');

describe('generate', () => {
  afterEach((done) => {
    rimraf(`${__dirname}/.tmp`, done);
  });

  it('should generate a component', (done) => {
    var directory = `${__dirname}/.tmp`;

    generate('Alert', directory)
      .then(filename => {
        filename.should.equal(`${directory}/src/components/Alert.js`);
        done();
      });
  });

  it('should always generate a component with it\'s name capitalized', () => {
    var directory = `${__dirname}/.tmp`;

    generate('alert', directory)
      .then(filename => {
        filename.should.equal(`${directory}/src/components/Alert.js`);
        done();
      });
  });
});
