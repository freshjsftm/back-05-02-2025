const { access } = require('fs/promises');
exports.fileExists = async (pathFile) => {
  try {
    await access(pathFile);
    return true;
  } catch (error) {
    return false;
  }
};
