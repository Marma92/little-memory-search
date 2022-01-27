const es = require ('event-stream')
const {getStream} = require('../lib')

/**
 * Finds a given user if in the consumed data
 * @param {string} inputFile path of the file to stream
 * @param {string} userId the id of the searched user
 * @param {function} callback the function to execute once the given userId's
 * user is found
 */
const findUser = (inputFile, userId, callback) => {
  getStream(inputFile)
    .pipe(es.map((data) => {
      if (data.id == userId)
        callback(data);
    }
    ));
}

/**
 * This function will print the name of the searched user, and then
 * kill the process to not let a useless map loop turn
 * @param {string} inputFile path of the source data file
 * @param {string} userId the id of the searched user
 */
const printUserName = (inputFile, userId) => {
  findUser(inputFile, userId, (data) => {
    console.log(data.name);
    //not completely clean, but avoid looping until the EOF
    process.exit();
  });
}

module.exports = {printUserName}