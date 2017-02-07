'use strict';

const config = require('../config.js');

const uploadFile = (data) =>
$.ajax({
  url: config.apiOrigins.production + '/uploads',
  method: 'POST',
  data,
  contentType: false,
  processData: false,
});

module.exports = {
  uploadFile,
};
