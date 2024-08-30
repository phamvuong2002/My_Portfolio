const fs = require("fs");
const path = require("path");

function loadImages(parentDirectory, subDirectory) {
  const directoryPath = path.join(parentDirectory, subDirectory);

  // Check if the directory exists
  if (!fs.existsSync(directoryPath)) {
    console.error(`Directory ${directoryPath} does not exist.`);
    return [];
  }

  // Read all files in the directory
  const files = fs.readdirSync(directoryPath);

  // Filter out non-image files and return paths
  const imagePaths = files
    .filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file))
    .map((file) => path.join(directoryPath, file));

  return imagePaths;
}

module.exports = loadImages;
