const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ng-elements-xkdc/runtime.js',
    './dist/ng-elements-xkdc/polyfills.js',
    './dist/ng-elements-xkdc/scripts.js',
    './dist/ng-elements-xkdc/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, './elements/ng-elements-xkdc.js');
  await fs.copyFile(
    './dist/ng-elements-xkdc/styles.css',
    './elements/styles.css'
  )
})();
