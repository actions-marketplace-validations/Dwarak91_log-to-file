import * as core from '@actions/core'
import * as fs from 'fs'

async function run(): Promise<void> {
  try {
    const fileName: string = core.getInput('fileName')
    const logData: string = core.getInput('logData')
    core.info(`Appending logs to existing file if created already or create and write data. Fileame: ${fileName}`)

    fs.writeFileSync(fileName, new Date().toTimeString() + '\n', {flag: 'a+',})
    fs.writeFileSync(fileName, logData + '\n', {flag: 'a+',})

    const contents = fs.readFileSync(fileName, 'utf-8');
    core.setOutput('logs', contents)

  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
