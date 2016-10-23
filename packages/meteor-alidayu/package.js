Package.describe({
  name: 'yongjun:meteor-alidayu',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'meteor alidayu:sms,doublecall,singlecall',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yongjun925/meteor-alidayu-example',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "urllib": "2.17.0"
});

Package.onUse(function(api) {
  //api.versionsFrom('1.4.1.2');
  api.versionsFrom('1.1.0.2');
  api.use('ecmascript@0.5.8_1');
  api.addFiles([
    'server/topUtil.js',
    'server/topClient.js',
    'server/alidayu.js'
  ], 'server');

  api.use(['underscore']);

  api.export(['Alidayu'],'server');
  //api.mainModule('meteor-alidayu.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('yongjun:meteor-alidayu');
  api.mainModule('meteor-alidayu-tests.js');
});
