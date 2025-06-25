import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import getData from './dbhadlers/getData.js';
import setData from './dbhadlers/setData.js';
import { data } from 'react-router-dom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const defaultData = { passwords: [] }

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

app.whenReady().then(createWindow);
ipcMain.on('requestForData', async (event, req) => {
  // Обробка повідомлення від фронтенду
  console.log('Request:', req);
  let passwords = await getData(defaultData);
  console.log(passwords);
  // Відправка відповіді назад
  event.sender.send('onRequestForData', passwords);
});

ipcMain.on('sendPasswd', async (event, password) => {
  console.log("Get data:", password);
  await setData(defaultData, password);
  event.sender.send('onSentPasswd', true);
});