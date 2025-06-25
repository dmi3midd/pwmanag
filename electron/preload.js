const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  requestForData: (req) => ipcRenderer.send('requestForData', req),
  onRequestForData: (callback) => ipcRenderer.on('onRequestForData', (event, data) => callback(data)),

  sendPasswd: (password) => ipcRenderer.send('sendPasswd', password),
  onSentPasswd: (callback) => ipcRenderer.on('onSentPasswd', (event, data) => callback(data)),
});