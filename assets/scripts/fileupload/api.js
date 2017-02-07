'use strict';

const config = require('../config.js');

// api call to POST data to aws
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
