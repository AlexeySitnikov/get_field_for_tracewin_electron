const {app, BrowserWindow} = require('electron')

const createWindow = ()=>{
 const win = new BrowserWindow({
  width: 900,
  height: 900,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
})
 
//  win.setMenuBarVisibility(false)
 win.setTitle('Епти!')
//  win.loadURL('http://localhost:3000')
 win.loadFile('src/index.html')
}

app.whenReady()
  .then(()=>{
    createWindow()
  })

  app.on('window-all-closed', ()=>{
    app.quit()
  })

