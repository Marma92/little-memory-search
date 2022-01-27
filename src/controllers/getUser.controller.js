
const fs = require ('fs')
const getUserService = require( "../services/getUser.services" );

/**
 * Controller wrapping the function to get the name of a user
 * Checks that the given source file exists
 * @param {string} inputFile
 * @param {string} userId
 * @returns the searched username
 */
const getUserName = (inputFile, userId) => {
  //if there is the given file
  try {
    if (fs.existsSync(inputFile))
      return getUserService.printUserName(inputFile, userId);
  }
  catch (err) {
    console.error(err);
  }
}


module.exports = {getUserName}