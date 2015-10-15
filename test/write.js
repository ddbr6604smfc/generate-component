/**
 * Module dependencies
 */

var fs = require('fs');
var rimraf = require('rimraf');
var should = require('should');
var write = require('../lib/write');

describe('write', () => {
  afterEach((done) => {
    rimraf(`${__dirname}/.tmp`, done);
  });

  it('should save `template` to `dest`', (done) => {
    var template = 'Hello world';
    var dest = `${__dirname}/.tmp/src/components/HelloWorld.js`;

    write(template, dest)
      .then(filename => filename.should.equal(dest))
      .then(() => {
        fs.readFile(dest, 'utf8', (err, data) => {
          data.should.equal(template);
          done();
        });
      });
  });
});
