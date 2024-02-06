import { getTempDirectory } from './getTempDirectory.js'
// const getTempDirectory = require('./getTempDirectory.js')
// const makeTempDirectory = require('./makeTempDirectory.js')
// const readInitialFiles = require('./readInitialFiles.js')
// const writeOutputFiles = require('./writeOutputFiles.js')
import { makeTempDirectory } from './makeTempDirectory.js'
import { readInitialFiles } from './readInitialFiles.js'
import { writeOutputFiles } from './writeOutputFiles.js'

// const files = ['F:\\E1.txt', 'F:\\E2.txt', 'F:\\E3.txt', 'F:\\E4.txt']

export async function mainFunction(inputFiles){
  const files = [...inputFiles]
  console.log(files)
  const startTime = Date.now()
  const { currentDirectory } = getTempDirectory(files)

  makeTempDirectory(currentDirectory)

  await readInitialFiles(files, currentDirectory)

  const endReadTime = Date.now()
  console.log('Time needed to read files: ' + (endReadTime - startTime)/1000 + ' sec')
  const startWriteTime = Date.now()

  writeOutputFiles(files, currentDirectory, currentDirectory, startWriteTime)
    
  console.log('Time needed to write all files: ' + (Date.now() - startWriteTime)/1000 + ' sec')
}