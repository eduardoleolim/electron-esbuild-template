import { App } from 'electron/main';
import { MainWindow } from './mainWindow/MainWindow';

export class ElectronApp {
  private readonly app: App;
  private readonly mainWindow: MainWindow;

  constructor(app: App) {
    if (!app.isReady()) {
      throw new Error('ElectronApp can only be created after app is ready');
    }

    this.app = app;

    this.app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        this.app.quit();
      }
    });

    this.mainWindow = new MainWindow();
  }

  public async init() {
    await this.mainWindow.show();
  }
}
