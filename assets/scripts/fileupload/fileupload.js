'use strict';

const api = require('./api');
const ui = require('./ui');

const getFormFields = require(`../../../lib/get-form-fields`);

const handleMultiPartFormdata = function(event) {
  event.preventDefault();

  debugger;

  let formData = getFormFields(this);

  if(!formData.image.file || !formData.image.title) {
    alert('The form should contain both title and file');
  }

  let filename = formData.image.file.toLowerCase();
  let png = filename.endsWith(".png");
  let doc = filename.endsWith(".doc");
  let pdf = filename.endsWith(".pdf");

  if(!png && !doc && ! pdf) {
    alert("please upload a png, doc or pdf file");
    return;
  }

  // get data from form
  let data = new FormData(event.target);

  console.log('handleMultiPartFormdata ran, data is ', data);
  // api call to upload file to aws
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
