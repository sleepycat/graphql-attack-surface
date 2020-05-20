#!/usr/bin/env node
'use strict'
const chalk = require('chalk')
const meow = require('meow')
const { attackSurface } = require('./attackSurface')

const cli = meow(
  `
    Usage
      $ graphql-attack-surface <schema.json>

    Examples
      $ graphql-attack-surface schema.json
      $ graphql-attack-surface https://example.com/graphql
`,
  {
    flags: {},
  },
)
;(async () => {
  const stringFields = await attackSurface(cli.input[0])
  for (const [field, inputs] of Object.entries(stringFields)) {
    console.log('\r\n')
    console.log(chalk.yellow(`${field} accepts the following string inputs:`))

    for (const input of inputs) {
      for (const [fieldName, dataType] of Object.entries(input)) {
        console.log(
          chalk.yellow(`  ${fieldName} accepts a value of ${dataType}`),
        )
      }
    }
  }
})()
