const { mkdir } = require('fs/promises');

exports.createFolderAsync = async (dirName) => {
  try {
    await mkdir(dirName);
  } catch (error) {
    console.log('Error --->>> ', error);
  }
};
