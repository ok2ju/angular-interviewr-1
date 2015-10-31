var $ = require('jquery');

var cropKeys = [
  'width',
  'height',
  'x',
  'y',
  'scaleX',
  'scaleY'
];

module.exports = function ModalController($modalInstance, $timeout, Upload, config, file) {
  var vm = this;

  vm.file = file;
  vm.cropData = {};

  vm.ok = function () {
    //$modalInstance.close(vm.selected.item);

    var data = {
      file: vm.file,
      "Content-Type": vm.file.type != '' ? vm.file.type : 'application/octet-stream'
    }

    Upload.upload({
      url: config.api_url + '/api/v1/images',
      data: data,
      headers: {
        crop: JSON.stringify(vm.cropData)
      }
    })
  };

  vm.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $modalInstance.rendered.then(function() {
    $timeout(init, 100);//TODO: here is dirty hack.
  });

  function init() {
    vm.cropper = $('.modal-body > img').cropper({
      aspectRatio: 1 / 1,
      crop: function(e) {
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
