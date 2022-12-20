const branch = process.argv.slice(2)[0];
const { exec } = require('child_process');

console.log("expose environment name", branch);
switch (branch) {
  case 'staging':
    exec('export NODE_ENV=staging');
    break;
  case 'release':
    exec('export NODE_ENV=production');
    break;
  case 'dev':
  default:
    exec('export NODE_ENV=development');
    break;
}
