const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  requestForData: (req) => ipcRenderer.send('requestForData', req),
  onRequestForData: (callback) => ipcRenderer.on('onRequestForData', (event, data) => callback(data)),

  setPasswd: (password) => ipcRenderer.send('setPasswd', password),
  onSetPasswd: (callback) => ipcRenderer.on('onSetPasswd', (event, data) => callback(data)),

  editPasswd: (password) => ipcRenderer.send('editPasswd', password),
  onEditPasswd: (callback) => ipcRenderer.on('onEditPasswd', (event, data) => callback(data)),

  deletePasswd: (password) => ipcRenderer.send('deletePasswd', password),
  onDeletePasswd: (callback) => ipcRenderer.on('onDeletePasswd', (event, data) => callback(data)),
});