'use strict';

const onUploadFileSuccess = (data) => {
  console.log(data);
};

const onUploadFileFailure = (error) => {
  console.log(error);
};

module.exports = {
  onUploadFileSuccess,
  onUploadFileFailure,
};
