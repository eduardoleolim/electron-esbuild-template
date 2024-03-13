import { BrowserWindow } from 'electron/main';
import * as path from 'path';

export class MainWindow extends BrowserWindow {
  private readonly URL: string;

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

    if (process.env.NODE_ENV === 'development') {
      this.URL = 'http://localhost:9080';
    } else {
      this.URL = `file://${path.resolve(__dirname, '../renderer/index.html')}`;
    }

    this.setMenu(null);
  }

  async show(): Promise<void> {
    await this.loadURL(this.URL);
    super.show();
    if (process.env.NODE_ENV === 'development') {
      this.webContents.openDevTools();
    }
  }
}
