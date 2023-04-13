const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let resArr = [];
  let nStr = n + '';

  for (let i = 0; i < nStr.length; i++) {
    resArr.push(nStr.slice(0, i) + nStr.slice(i + 1));
  }

  return Math.max.apply(null, (resArr.map(subarr => +subarr)));
}

module.exports = {
  deleteDigit
};
