const execa = require('execa');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);

process.stdin.on('keypress', (str, key) => {
  if (key.name !== 'return' && key.name !== 'enter') {
    return;
  }
  console.log("key", key);
});
const myProcess = execa('npx tsc --noEmit --watch', {cleanup: true});
