'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

const handleMultiPartFormdata = function(event) {
  event.preventDefault();
  // debugger;
  // let data = getFormFields(event.target);
  let data = new FormData(event.target);
  console.log('handleMultiPartFormdata ran, data is ', data);
  api.uploadFile(data)
    .then(ui.onUploadFileSuccess)
    .catch(ui.onUploadFileFailure);
};

const addHandlers = () => {
  $('#multipart-form-data').on('submit', handleMultiPartFormdata);
};

module.exports = {
  addHandlers,
};
