import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import getConfig from './confighandlers/getConfig.js';

import getData from './dbhadlers/getData.js';
import setData from './dbhadlers/setData.js';
import updateData from './dbhadlers/updateData.js';
import deleteData from './dbhadlers/deleteData.js';

import fileExists from './utils/fileExist.js';
import fileCreate from './utils/fileCreate.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    maxWidth: 850,
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
  if (!await fileExists('db')) {
    console.log("db doesn't exist");
    await fileCreate('db');
  }
  if (!await fileExists('config')) {
    console.log("config doesn't exist");
    await fileCreate('config');
  }
  createWindow();
});

ipcMain.on('requestForConfig', async (event, req) => {
  console.log(req);
  const config = await getConfig();
  event.sender.send('onRequestForConfig', config);
  console.log(config);
});

ipcMain.on('requestForData', async (event, req) => {
  console.log(req);
  let passwords = await getData(false);
  event.sender.send('onRequestForData', passwords);
});

ipcMain.on('setPasswd', async (event, password) => {
  const result = await setData(password);
  event.sender.send(result);
});

ipcMain.on('editPasswd', async (event, password) => {
  const result = await updateData(password);
  event.sender.send(result);
});

ipcMain.on('deletePasswd', async (event, password) => {
  const result = await deleteData(password);
  event.sender.send(result);
});

