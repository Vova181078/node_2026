const fs = require('node:fs/promises');
const path = require('path');


async function createJsFile () {


       await fs.writeFile(path.join(__dirname, 'rest.js'), '');
}
createJsFile();

