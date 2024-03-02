import * as fs from 'fs';
import * as path from 'path';
import React from 'react';

window.onload = () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency]!);
  }
  replaceText('react-version', React.version);

  const packageJsonContent = fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8');
  const packageJson = JSON.parse(packageJsonContent);
  const version = packageJson.devDependencies['@material/web'].replace('^', '');
  replaceText('material-web-version', version);
};
