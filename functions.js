const path = require('path');
const { rmFileAsync } = require('./utils/deleteFile');
const { readFileAsync } = require('./utils/readFile');
const { writeFileAsync, addFileAsync } = require('./utils/writeFile');

exports.createLogFileWithDate = async (dirName) => {
  try {
    const date = new Date().toISOString().split('.').at(0);
    const dateFormat = date.replaceAll(':', '-');
    const pathFile = 'log_' + dateFormat + '.txt';
    const pathFileFull = path.resolve(dirName, pathFile);
    await writeFileAsync(pathFileFull, '');
  } catch (error) {
    console.log(error);
  }
};

exports.startWorkWithFile = async (pathFile, newText = '') => {
  try {
    //await writeFileAsync(pathFile, newText);
    await addFileAsync(pathFile, newText);
    const content = await readFileAsync(pathFile);
    console.log(content);
  } catch (error) {
    console.log('Error --->>> ', error);
  }
};

exports.endWorkWithFile = async (pathFile) => {
  try {
    await rmFileAsync(pathFile);
  } catch (error) {
    console.log('Error --->>> ', error);
  }
};
