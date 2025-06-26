import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import getData from './dbhadlers/getData.js';
import setData from './dbhadlers/setData.js';
import updateData from './dbhadlers/updateData.js';
import deleteData from './dbhadlers/deleteData.js';
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

  //development
  win.loadURL("http://localhost:5173");
}

app.whenReady().then(async () => {
  if (!await fileExists()) {
    console.log("file doesn't exist");
    await fileCreate();
  }
  createWindow();
});

ipcMain.on('requestForData', async (event, req) => {
  console.log('Request:', req);
  let passwords = await getData();
  event.sender.send('onRequestForData', passwords);
});

ipcMain.on('setPasswd', async (event, password) => {
  console.log("Get data:", password);
  await setData(password);
  event.sender.send('onSetPasswd', true);
});

ipcMain.on('editPasswd', async (event, password) => {
  console.log("Get data:", password);
  await updateData(password);
  event.sender.send('onEditPasswd', true);
});

ipcMain.on('deletePasswd', async (event, password) => {
  console.log("Get data:", password);
  await deleteData(password);
  event.sender.send('onDeletePasswd', true);
})