import { app } from 'electron'
import { ElectronApp } from './main/ElectronApp'

void (async () => {
  try {
    await app.whenReady()

    const electronApp = new ElectronApp(app)
    await electronApp.init()
  } catch (error: any) {
    console.error('Unhandled error in promise:', error)
    app.quit()
  }
})()
