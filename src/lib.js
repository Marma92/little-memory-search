const fs = require('fs')
const JSONStream = require('JSONStream')


/**
 * Provides a redirected consumable stream of the
 * inputData file's content
 * @param {string} inputData
 * @returns
 */
const getStream = (inputData) => {
  const jsonData = inputData;
  const stream = fs.createReadStream(jsonData, { encoding: 'utf8' });
  const parser = JSONStream.parse('*');
  return stream.pipe(parser);
};


module.exports = {getStream}