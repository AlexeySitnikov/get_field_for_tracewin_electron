
export function getInputFiles(files = []){
  const inputFiles = []
  files.forEach((file, index)=>{
    if (index > 1) inputFiles.push(file)
  })
return (inputFiles)
}