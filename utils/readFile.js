const {readFile} = require('fs/promises');

async function readFileAsync(pathFile) {
  try {
    return await readFile(pathFile, 'utf8');
  } catch (error) {
    console.log('Error --->>> ', error);
  }
}

module.exports = { readFileAsync };
