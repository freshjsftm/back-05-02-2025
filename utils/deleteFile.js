const { rm, access } = require('fs/promises');

async function fileExists(pathFile) {
  try {
    await access(pathFile);
    return true;
  } catch (error) {
    return false;
  }
}

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
