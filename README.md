<p align="center">
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p>

# Purpose

Write log data to a file, without having to worry about custom workflow steps. This Action appends data to log file with timestamp.

## Usage:
``` yaml
- uses: dwarak91/log-to-file@0.1
  with:
    json: 'Write this data to log file with timestamp'
    filename: 'test.json'
```