const { readdir } = require('fs/promises');

exports.readDirAsync = async (pathDir) => {
  try {
    const files = await readdir(pathDir);
    return files;
  } catch (error) {
    console.log('Error --->>> ', error);
  }
};
