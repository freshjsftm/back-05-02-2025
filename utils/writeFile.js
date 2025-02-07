const { writeFile, appendFile } = require('fs/promises');

exports.writeFileAsync = async (pathFile, newText) => {
  try {
    await writeFile(pathFile, newText);
  } catch (error) {
    console.log('Error --->>> ', error);
  }
};

exports.addFileAsync = async (pathFile, newText) => {
  try {
    await appendFile(pathFile, newText);
  } catch (error) {
    console.log('Error --->>> ', error);
  }
};