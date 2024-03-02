import { App } from 'electron/main';
import * as path from 'path';
import { MainWindow } from './mainWindow/MainWindow';

export class ElectronApp {
  private readonly app: App;
  private readonly mainWindow: MainWindow;
  private readonly mainWindowURL: string;

  constructor(app: App) {
    if (!app.isReady()) {
      throw new Error('ElectronApp can only be created after app is ready');
    }

    this.app = app;
    this.mainWindow = new MainWindow();
    if (process.env.NODE_ENV === 'development') {
      this.mainWindowURL = 'http://localhost:9080';
    } else {
      this.mainWindowURL = `file://${path.resolve(__dirname, '../renderer/index.html')}`;
    }

    this.app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        this.app.quit();
      }
    });
  }

  public async init() {
    await this.mainWindow.loadURL(this.mainWindowURL);
    this.mainWindow.show();
    if (process.env.NODE_ENV === 'development') {
      this.mainWindow.webContents.openDevTools();
    }
  }
}
