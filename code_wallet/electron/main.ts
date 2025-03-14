import { app, BrowserWindow, ipcMain } from 'electron'
import { fileURLToPath } from 'node:url'
import fs from "fs"
import path from 'node:path'
import { registerRoute } from '../src/lib/electron-router-dom'
import { getFragments, getTags, addFragment, addTag, setTag, setFragment, deleteTag, deleteFragment, dbInitialization } from "./database/database.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, '..')

// 🚧 Use ['ENV_NAME'] avoid v"ite":define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let win: BrowserWindow | null

if(!fs.existsSync(path.join(MAIN_DIST, "database.json"))){
  fs.writeFile(path.join(MAIN_DIST, "database.json"), JSON.stringify({}), (error) => {
      if (error){
          console.log(error)
      }
      else{
          console.log("Le fichier a été créé avec succès")
      }
  })
}

dbInitialization()

function createWindow() {
  win = new BrowserWindow({
    // icon: '/Code_Wallet.png',
    icon: path.join(process.env.VITE_PUBLIC, 'Code-Wallet.png'),
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      // webSecurity: false
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    console.log("finished")
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })
// console.log(process.env.)
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
    // console.log("bonjour")
    // console.log(VITE_DEV_SERVER_URL)
    // console.log(path.join(__dirname, 'index.html'))
    // console.log(process.env.VITE_PUBLIC)
    // console.log(RENDERER_DIST)
  } else {
    // win.loadFile('dist/index.html')
    console.log("bonsoir")
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }

  registerRoute({
    id: "main",
    browserWindow: win,
    htmlFile: path.join(RENDERER_DIST, 'index.html')
  })
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.

// Windows configuration
app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(() => {
  createWindow()

  ipcMain.handle("getFragments", () => getFragments())

  ipcMain.handle("getTags", () => getTags())
  
  ipcMain.handle("addTag", (_, tag) => addTag(tag))

  ipcMain.handle("addFragment", (_, fragment) => addFragment(fragment))

  ipcMain.handle("setTag", (_, tag) => setTag(tag))

  ipcMain.handle("setFragment", (_, fragment) => setFragment(fragment))

  ipcMain.handle("deleteTag", (_, tagId) => deleteTag(tagId))

  ipcMain.handle("deleteFragment", (_, fragmentId) => deleteFragment(fragmentId))


})
