const {getUserName} = require('./src/controllers/getUser.controller')

const inputData = './data/input.json'


// - accept an `id` as a command-line argument
const id = process.argv[2]

// - log to the console the `name` attribute of the object with the corresponding id.
getUserName(inputData, id)