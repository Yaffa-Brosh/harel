const branch = process.argv.slice(2)[0];
const { exec } = require('child_process');

console.log('selected branch to build:', branch);
switch (branch) {
  case 'staging':
    exec('npm run build:staging');
    break;
  case 'release':
    exec('npm run build');
    break;
  case 'dev':
  default:
    exec('npm run build:dev');
    break;
}
