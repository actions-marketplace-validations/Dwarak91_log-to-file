import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const fileName: string = core.getInput('fileName')
    const logData: string = core.getInput('logData')
    core.info(`Appending logs to existing file if created already or create and write data. Fileame: ${fileName}`)

    writeFileSync(fileName, new Date().toTimeString(), {flag: 'a+',})
    writeFileSync(fileName, logData, {flag: 'a+',})
    
    const contents = readFileSync(filename, 'utf-8');
    core.setOutput('logs', contents)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
