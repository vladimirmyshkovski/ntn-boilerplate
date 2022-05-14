// const fs = require('fs')
import fs from 'fs'

const replaceFileText = (filePath: string, startSplitter: string, endSplitter: string, text: string): void => {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      // return console.log(err)
    }
    const firstPart = data.split(startSplitter)[0]
    const lastPart = data.split(endSplitter)[1]
    const result = `${firstPart}${startSplitter}\n${text}\n${endSplitter}${lastPart}`
    fs.writeFile(filePath, result, 'utf8', function (err) {
      if (err) {
        // return console.log(err)
      }
    })
  })
}

replaceFileText(
  './README.md',
  '<!-- START_SITE_URL -->',
  '<!-- END_SITE_URL -->',
  `**[Website](https://ntn-boilerplate.netlify.app/)**`
)

replaceFileText(
  './README.md',
  '<!-- START_GIT_URL -->',
  '<!-- END_GIT_URL -->',
  `**[Source code](https://ntn-boilerplate.netlify.app/)**`
)

module.exports = { replaceFileText }
