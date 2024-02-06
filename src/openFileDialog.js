const {ipcMain} = require('electron')
  const a = document.getElementById('open')

  a.addEventListener('click', ()=>{
    document.getElementById('fileId').click()
  })

  document.getElementById('fileId').addEventListener('change', function(e){
    //use the file here
    var files = e.target.files;
    console.log(files)
  })


