import { app, BrowserWindow } from 'electron';


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
    }
  });

  //prod
  //win.loadFile(path.join(__dirname, '../dist/index.html'));

  //development
  win.loadURL("http://localhost:5173");
}

app.whenReady().then(createWindow);