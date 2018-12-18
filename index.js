'use strict';
var CreateHashFilePlugin = (function () {
  const write = require('write');
  const path = require('path');

  function CreateHashFilePlugin(options){
    if (options === void 0) {
      throw new Error(`Please provide 'options' for the CreateHashFilePlugin config`);
    }

    this.options = options;
  }

  function _createFile(compStats, filePath, fileName, content) {
    const fullPath = path.join(filePath, fileName);
    write.sync(fullPath, content.replace('[hash]', compStats.hash));
  }

  CreateHashFilePlugin.prototype.apply = function (compiler) {
    const createFile = (compStats) => {
      this.options.forEach(option => {
        if (option.path == null) {
          throw new Error(`Please provide 'options.path' in the CreateHashFilePlugin config`);
        }

        if (option.fileName == null) {
          throw new Error(`Please provide 'options.fileName' in the CreateHashFilePlugin config`);
        }

        if (option.content == null) {
          throw new Error(`Please provide 'options.content' in the CreateHashFilePlugin config`);
        }

        _createFile(compStats, option.path, option.fileName, option.content);
      });
    };

    if (!!compiler.hooks) {
      compiler.hooks.done.tap('CreateFileWebpack', createFile);
    } else {
      compiler.plugin('done', createFile);
    }
  };

  return CreateHashFilePlugin;
})();

module.exports = CreateHashFilePlugin;
