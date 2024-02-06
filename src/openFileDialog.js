  const a = document.getElementById('open')

  a.addEventListener('click', ()=>{
    document.getElementById('fileId').click()
  })

  document.getElementById('fileId').addEventListener('change', function(e){
    var files = e.target.files;
    console.log(files)
  })


