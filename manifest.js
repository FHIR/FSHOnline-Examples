const fs = require('fs');
const path = require('path');
const moment = require('moment');
const lineReaderComponent = require('readline');

const manifestPath = path.join(__dirname, 'index.json');

/***
 * Reads the first two lines of a FSH file, returning the name and description properties
 */
async function getMetadata(filePath, fileName) {
  let metaData = {name: fileName.replace('.fsh', '')};
  let lineReader = lineReaderComponent.createInterface({
    input: fs.createReadStream(filePath)
  });

  const parseLines = async () => {
    for await (const line of lineReader) {
      if (line.includes('@Name:')) {
        const splitLine = line.split('@Name: ');
        metaData.name = splitLine[1];
      } else if (line.includes('@Description')) {
        const splitLine = line.split('@Description: ');
        metaData.description = splitLine[1];
      }
      if (Object.keys(metaData).length == 2) return;
    }
  }

  await parseLines();

  return metaData;
}

/***
 * Takes the local file path of a file and retuns the corresponding Github url suffix
 */
function generatePath(filePath) {
  let urlPath = filePath.split('FSHOnline-Examples/Examples/')[1];
  return urlPath.replace(' ', '%20'); // Spaces appear as '%20' in Github urls
}

/***
 * Returns an array of manifest objects when provided a directory's filepath
 */
async function getChildren(baseDirName) {
  let workingArray = [];

  // First we'll take in all files in the provided directory
  const files = fs.readdirSync(baseDirName);

  for (const file of files) {
    const filePath = path.join(baseDirName, file); // We're appending the child file name to the base directory name
    let fileStats = fs.statSync(filePath); // This contains directory information

    if (file.endsWith('fsh')) {
      const index = workingArray.push({ path: generatePath(filePath) }) - 1;
      const metaData = await getMetadata(filePath, file);
      workingArray[index].name = metaData.name;
      workingArray[index].description = metaData.description;
      workingArray[index].type = "file";
    } else if (fileStats.isDirectory()) {
      const index = workingArray.push({ name: file, path: generatePath(filePath) }) - 1;
      workingArray[index].type = 'category';
      workingArray[index].children = [];
      const children = await getChildren(filePath);
      workingArray[index].children = children;
      if (workingArray[index].children.length === 0) {
        workingArray.pop();
      }
    }
  }
  return workingArray;
}

async function generateManifest() {
  const examplesArr = await getChildren(path.join(__dirname, 'Examples'));
  let manifestObj = {timestamp: moment(Date.now()).format(), children: examplesArr };
  fs.writeFileSync(manifestPath, JSON.stringify(manifestObj), 'utf-8');
}

generateManifest();
