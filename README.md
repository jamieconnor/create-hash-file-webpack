# Create file plugin for WebPack
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A webpack plugin to create a file with the hash.

\[hash] will be replaced by the compilation hash

Inspired by [create-file-webpack]https://github.com/Appius/create-file-webpack

## Installation
```
npm i create-hash-file-webpack --save-dev
```

## Usage
```js
const CreateHashFileWebpack = require('create-hash-file-webpack')

// webpack config
{
  plugins: [
    new CreateHashFileWebpack([
    {
        // path to folder in which the file will be created
        path: './dist',
        // file name
        fileName: 'index.js',
        // content of the file
        content: 'the compilation hash is [hash]'
    },
    {
        // path to folder in which the file will be created
        path: './dist',
        // file name
        fileName: 'index.js',
        // content of the file
        content: '<script src="/js/bundle.[hash].js"></script>'
    }])
  ]
}
```
