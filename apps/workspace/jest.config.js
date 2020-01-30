module.exports = {
  name: 'workspace',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/workspace',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
