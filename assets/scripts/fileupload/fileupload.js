'use strict';

const api = require('./api');
const ui = require('./ui');

const getFormFields = require(`../../../lib/get-form-fields`);

const handleMultiPartFormdata = function(event) {
  event.preventDefault();

  // get form field data.
  let formData = getFormFields(this);

  // check if form data has both required fields.
  if(!formData.image.file || !formData.image.title) {
    $('#form-entry-error-modal').modal('show');
    return;
  }

  let input = document.getElementById('myFile');

  // check for filesize
  let fileSize = input.files[0].size/1024/1024/1024;

  // if filesize is less than 1 GB, error and return
  // if(fileSize < 1) {
  //   $('#file-size-error-modal').modal('show');
  //   return;
  // }

  // check to see if the uploaded file is of pdf, doc or png type
  let filename = formData.image.file.toLowerCase();
  let png = filename.endsWith(".png");
  let doc = filename.endsWith(".doc");
  let pdf = filename.endsWith(".pdf");

  // if neither type, alert and return
  if(!png && !doc && ! pdf) {
    $('#form-data-error-modal').modal('show');
    return;
  }

  // get data from data
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
