#!/usr/bin/env node
'use strict'

const exec = require('child_process').exec

exec(`sudo ${__dirname}/mimipenguin/mimipenguin.sh`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  console.log(stdout)
  console.log(stderr)
})
