import { BrowserWindow } from 'electron/main';
import * as path from 'path';

export class MainWindow extends BrowserWindow {
  constructor() {
    super({
      width: 800,
      height: 600,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        preload: path.join(__dirname, 'preload.js')
      }
    });

    this.setMenu(null);
  }
}
