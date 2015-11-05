module.exports = {
  options: {
    configFile: 'test/karma.conf.js',
  },
  unit: {
    singleRun: true
  },
  watch: {
    singleRun: false,
    autoWatch: true,
    reporters: ['dots']
  },
  debug: {
    singleRun: false,
    autoWatch: true,
    reporters: ['dots'],
    browsers: ['Chrome']
  }
};
