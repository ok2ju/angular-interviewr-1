import $ from 'jquery';

var cropKeys = [
  'width',
  'height',
  'x',
  'y',
  'scaleX',
  'scaleY'
];

module.exports = function CompanyPhotoModalController($uibModalInstance, $timeout, Upload, config, file, company) {
  const vm = this;

  vm.file = file;
  Upload.dataUrl(file).then(function(url) {
    vm.dataUrl = url;
    $timeout(init.bind(this));
  });

  vm.cropData = {};

  vm.ok = function () {
    const data = {
      file: vm.file,
      "Content-Type": vm.file.type !== '' ? vm.file.type : 'application/octet-stream'
    };

    Upload.upload({
      url: config.API_URL + '/api/v1/images',
      data: data,
      headers: {
        crop: JSON.stringify(vm.cropData)
      }
    }).then(function(resp) {
      const data = resp.data;
      if(data._id) {
        company.imageId = data._id;
        vm.cancel();
      }
    });
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  function init() {
    vm.cropper = $('.modal-body > img').cropper({
      aspectRatio: 1 / 1,
      crop(e) {
        cropKeys.forEach(function(key) {
          vm.cropData[key] = e[key];
        });
      },
      movable: false,
      zoomable: false,
      rotatable: false,
      scalable: false
    });
  }

};
