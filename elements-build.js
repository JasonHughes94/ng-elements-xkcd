const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ng-elements-xkcd/runtime.js',
    './dist/ng-elements-xkcd/polyfills.js',
    './dist/ng-elements-xkcd/scripts.js',
    './dist/ng-elements-xkcd/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, './elements/ng-elements-xkcd.js');
  await fs.copyFile(
    './dist/ng-elements-xkcd/styles.css',
    './elements/styles.css'
  )
})();
