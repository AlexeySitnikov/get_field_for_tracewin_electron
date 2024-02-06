const {app, BrowserWindow} = require('electron')

const createWindow = ()=>{
 const win = new BrowserWindow({
  width: 300,
  height: 300,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
})
 
//  win.setMenuBarVisibility(false)
 win.setTitle('Епти!')
 win.loadFile('src/index.html')
}

app.whenReady()
  .then(()=>{
    createWindow()
  })

  app.on('window-all-closed', ()=>{
    app.quit()
  })

