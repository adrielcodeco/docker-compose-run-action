const core = require('@actions/core')
const compose = require('docker-compose')
const utils = require('./utils')

try {
  const composeFiles = utils.parseComposeFiles(core.getMultilineInput('compose-file'))
  if (!composeFiles.length) {
    return
  }

  const service = core.getInput('service', { required: true })

  const options = {
    config: composeFiles,
    log: true,
    composeOptions: utils.parseFlags(core.getInput('compose-flags')),
    commandOptions: utils.parseFlags(core.getInput('run-flags')),
  }

  compose.run(service, core.getInput('command') || [], options)
    .then(() => {
      console.log('done !!!')
    })
    .catch(err => {
      core.setFailed(`compose run failed ${JSON.stringify(err)}`)
    })
} catch (error) {
  core.setFailed(error.message)
}
