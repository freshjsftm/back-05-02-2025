const { rm, access } = require('fs/promises');
const { fileExists } = require('./existsFile');

async function rmFileAsync(pathFile) {
  try {
    if (await fileExists(pathFile)) {
      await rm(pathFile);
    } else {
      console.log('file dont exists');
    }
  } catch (error) {
    console.log('Error --->>> ', error);
  }
}

module.exports = { rmFileAsync };
