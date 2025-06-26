import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import getData from './dbhadlers/getData.js';
import setData from './dbhadlers/setData.js';
import fileExists from './utils/fileExist.js';
import fileCreate from './utils/fileCreate.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = path.join(app.getPath('userData'), 'db.json');
//const configPath = path.join(app.getPath('userData'), 'config.json');

function createWindow() {
  const win = new BrowserWindow({
    maxWidth: 900,
    maxHeight: 700,
    title: "pwmanag",
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    }
  });
  //prod
  //win.loadFile(path.join(__dirname, '../dist/index.html'));
  console.log(dbPath);
  //development
  win.loadURL("http://localhost:5173");
}

app.whenReady().then(async () => {
  if (!await fileExists(dbPath)) {
    console.log("file doesn't exist");
    await fileCreate(dbPath);
  }
  createWindow();
});

ipcMain.on('requestForData', async (event, req) => {
  console.log('Request:', req);
  let passwords = await getData(dbPath);
  event.sender.send('onRequestForData', passwords);
});

ipcMain.on('sendPasswd', async (event, password) => {
  console.log("Get data:", password);
  await setData(dbPath, password);
  event.sender.send('onSentPasswd', true);
});