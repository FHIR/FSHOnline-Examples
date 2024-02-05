const fs = require('fs');
const path = require('path');
const moment = require('moment');
const lineReaderComponent = require('readline');

const baseExamplesPath = path.join(__dirname, 'Examples');
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
        const splitLine = line.split('@Name:');
        metaData.name = splitLine[1].trim();
      } else if (line.includes('@Description')) {
        const splitLine = line.split('@Description:');
        metaData.description = splitLine[1].trim();
      }
      if (Object.keys(metaData).length == 2) return;
    }
  }

  await parseLines();

  return metaData;
}

/***
 * Returns an array of manifest objects when provided a directory's filepath
 */
async function getChildren(relativeDir = '') {
  let workingArray = [];

  // First we'll take in all files in the provided directory
  const files = fs.readdirSync(path.join(baseExamplesPath, relativeDir));

  for (const file of files) {
    const relativeFilePath = path.join(relativeDir, file);
    const fullFilePath = path.join(baseExamplesPath, relativeFilePath); // We're appending the child file name to the base directory name
    let fileStats = fs.statSync(fullFilePath); // This contains directory information

    if (file.endsWith('fsh')) {
      const metaData = await getMetadata(fullFilePath, file);
      workingArray.push({
        path: encodeURI(relativeFilePath.split(path.sep).join('/')),
        ...metaData,
        type: 'file'
      });
    } else if (fileStats.isDirectory()) {
      const children = await getChildren(relativeFilePath);
      if (children.length) {
        workingArray.push({
          name: file,
          path: encodeURI(relativeFilePath.split(path.sep).join('/')),
          type: 'category',
          children
        });
      }
    }
  }
  return workingArray;
}

async function generateManifest() {
  let oldManifest;
  if (fs.existsSync(manifestPath)) {
    oldManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  } else {
    oldManifest = { timestamp: 'n/a', children: [] };
  }
  console.log('Old Manifest:');
  console.log('=============')
  console.log(`${'Timestamp:'.padEnd(15)} ${oldManifest.timestamp}`);
  oldManifest.children?.forEach(c => {
    console.log(`${(c.name + ':').padEnd(15)} ${c.children?.length ?? 0} entries`)
  });
  console.log();

  const examplesArr = await getChildren();
  let newManifest = { timestamp: moment(Date.now()).format(), children: examplesArr };
  console.log('New Manifest:');
  console.log('=============')
  console.log(`${'Timestamp:'.padEnd(15)} ${newManifest.timestamp}`);
  newManifest.children?.forEach(c => {
    const oldCount = oldManifest.children?.find(oc => oc.name === c.name)?.children?.length ?? 0;
    const newCount = c.children?.length ?? 0;
    const delta = newCount - oldCount;
    const extra = delta !== 0 ? ` (${delta > 0 ? '+': ''}${delta})` : '';
    console.log(`${(c.name + ':').padEnd(15)} ${newCount} entries${extra}`);
  });
  oldManifest.children?.forEach(c => {
    if (!newManifest.children.some(nc => nc.name == c.name)) {
      const oldCount = c.children?.length ?? 0;
      console.log(`${(c.name + ':').padEnd(15)} 0 entries (-${oldCount})`);
    }
  });
  console.log();

  fs.writeFileSync(manifestPath, JSON.stringify(newManifest, null, '\t'), 'utf-8');
}

generateManifest();
