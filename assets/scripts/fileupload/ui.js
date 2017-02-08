'use strict';

const onUploadFileSuccess = (data) => {
  $('#file-upload-success-modal').modal('show');
};

const onUploadFileFailure = (error) => {
  // console.log(error);
};

module.exports = {
  onUploadFileSuccess,
  onUploadFileFailure,
};
