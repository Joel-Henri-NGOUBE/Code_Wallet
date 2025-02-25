import { app, BrowserWindow, ipcMain } from 'electron'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { registerRoute } from '../src/lib/electron-router-dom'
import { IFragment } from '../src/interfaces/fragment'

const require = createRequire(import.meta.url)
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

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      // main: 
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }

  registerRoute({
    id: "main",
    browserWindow: win,
    htmlFile: path.join(__dirname, '/index.html')
  })
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(() => {
  createWindow()

  ipcMain.handle("bonjour", (e, th) => "Bonsoir " + th)

  const codeSample = `pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
                        ppppppppppppppppp
                        ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
                        pppppppppppppppppppppppp
                        pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
                        pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
                        pppppppppppppppp
                        ppppppppppppppppppppppppppp
                        ppppppp
                        pppppppppp
                        pppp
                        pppppppppppp
                        pppppppppppppppppppppppp
                        pppppppppppppppppppppppppppppppp
                        pppppppppppp`

    const fragmentsSample: IFragment[] = [
      // {id: ""1"",title: "The actual title", code: "codeSample", tags: []}, 
      {id: "1",title: "The actual title", code: codeSample, tags: [{id: "15", name: "Tagadadadadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadaxdaadadadadadadadadadaddaadad"}, {id: "16", name: "Redux"}, {id: "17", name: "StateComponents"}, {id: "18", name: "ReactRedux"}, {id: "19", name: "ReduxToolkits"}, {id: "4", name: "Tag4"}, {id: "8", name: "Tag8"}]}, 
      {id: "2",title: "The actual title", code: "codeSample", tags: [{id: "4", name: "Tag4"}, {id: "9", name: "Tag9"}, {id: "10", name: "Tag10"}]},
      {id: "3",title: "The actual title", code: "codeSample1", tags: [{id: "2", name: "Tag2"}, {id: "5", name: "Tag5"}, {id: "8", name: "Tag8"}, {id: "9", name: "Tag9"}]},
      {id: "4",title: "The actual title", code: "codeSample2", tags: [{id: "3", name: "Tag3"}, {id: "7", name: "Tag7"}, {id: "9", name: "Tag9"}, {id: "1", name: "Tag1"}]},
      {id: "5",title: "The actual title", code: "codeSample3", tags: [{id: "4", name: "Tag4"}, {id: "7", name: "Tag7"}, {id: "5", name: "Tag5"}, {id: "7", name: "Tag7"}]},
      {id: "6",title: "The actual title", code: "codeSample4", tags: [{id: "1", name: "Tag1"}, {id: "12", name: "Tag12"}, {id: "11", name: "Tag11"}]},
      {id: "7",title: "The actual title", code: "codeSample5", tags: [{id: "5", name: "Tag5"}, {id: "3", name: "Tag3"}, {id: "2", name: "Tag2"}, {id: "12", name: "Tag12"}]},
      {id: "8",title: "The actual title", code: "codeSample6", tags: [{id: "11", name: "Tag11"}, {id: "2", name: "Tag2"}, {id: "8", name: "Tag8"}, {id: "9", name: "Tag9"}]},
      {id: "9",title: "The actual title", code: "codeSample7", tags: [{id: "1", name: "Tag1"}, {id: "2", name: "Tag2"}, {id: "3", name: "Tag3"}, {id: "4", name: "Tag4"}]},
      {id: "10",title: "The actual title", code: "codeSample8", tags: [{id: "7", name: "Tag7"}, {id: "6", name: "Tag6"}, {id: "5", name: "Tag5"}, {id: "10", name: "Tag10"}]},
      {id: "11",title: "The actual title", code: "codeSample9", tags: [{id: "10", name: "Tag10"}, {id: "7", name: "Tag7"}, {id: "9", name: "Tag9"}, {id: "11", name: "Tag11"}]},
      {id: "12",title: "The actual title", code: "codeSample10", tags: [{id: "2", name: "Tag2"}, {id: "7", name: "Tag7"}, {id: "9", name: "Tag9"}, {id: "12", name: "Tag12"}]}
  ]

  const tagsSample = [{ id: "1", name: "Tag1" }, { id: "2", name: "Tag2" }, { id: "3", name: "Tag3" }, { id: "4", name: "Tag4" }, { id: "5", name: "Tag5" }, { id: "6", name: "Tag6" }, { id: "7", name: "Tag7" }, { id: "8", name: "Tag8" }, { id: "9", name: "Tag9" }, { id: "10", name: "Tag10" }, { id: "11", name: "Tag11" }, { id: "12", name: "Tag12" }, { id: "13", name: "Tag13" }, { id: "14", name: "Tag14" }, { id: "15", name: "Tagadadadadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadaxdaadadadadadadadadadaddaadad" }, { id: "16", name: "Redux" }, { id: "17", name: "StateComponents" }, { id: "18", name: "ReactRedux" }, { id: "19", name: "ReduxToolkits" },]

  ipcMain.handle("getFragments", () => fragmentsSample)

  // ipcMain.handle("addFragment", (fragment) => dbAdd(fragment))

  ipcMain.handle("getTags", () => tagsSample)

})
