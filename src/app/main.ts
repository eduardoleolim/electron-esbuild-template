import { app } from 'electron';
import { ElectronApp } from './main/ElectronApp';

(async () => {
  await app.whenReady();

  const electronApp = new ElectronApp(app);
  await electronApp.init();
})();
