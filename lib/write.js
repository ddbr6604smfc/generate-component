/**
 * Module dependencies
 */

var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

/**
 * Save a `template` to `dest`;
 *
 * @param {String} template
 * @param {String} dest
 * @returns {Promise}
 */

module.exports = function write(template, dest) {
  return new Promise((resolve, reject) => {
    mkdirp(path.dirname(dest), (error) => {
      if (error) {
        return reject(error);
      }

      fs.writeFile(dest, template, (error) => {
        if (error) {
          return reject(error);
        }

        resolve(dest);
      });
    });
  });
}
