import {mainFunction} from '../asd/mainFunction.js'

const a = document.getElementById('openFileDialog')
const argumentString = []

a.addEventListener('click', ()=>{
  document.getElementById('fileId').click()
})

document.getElementById('fileId').addEventListener('change', (e)=>{
  const files = e.target.files

  if (files){
    Array.from(files).forEach((file) => {
      argumentString.push(file.path)    
    })
  }

  console.log(argumentString)
  mainFunction(argumentString)

})