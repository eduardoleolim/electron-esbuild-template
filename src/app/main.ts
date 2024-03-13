import { app } from 'electron'
import { ElectronApp } from './main/ElectronApp';

(async () => {
  await app.whenReady()

  const electronApp = new ElectronApp(app)
  await electronApp.init()
})().catch((error) => {
  console.error('Unhandled error in promise:', error)
  app.quit()
})
