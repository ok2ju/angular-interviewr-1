var $ = require('jquery');

var cropKeys = [
  'width',
  'height',
  'x',
  'y',
  'scaleX',
  'scaleY'
];

module.exports = function ModalController($modalInstance, $timeout, Upload, config, UserResource, file, user) {
  var vm = this;

  vm.file = file;
  Upload.dataUrl(file).then(function(url) {
    vm.dataUrl = url;
    $timeout(init.bind(this));
  });

  vm.cropData = {};

  vm.ok = function () {
    //$modalInstance.close(vm.selected.item);

    var data = {
      file: vm.file,
      "Content-Type": vm.file.type !== '' ? vm.file.type : 'application/octet-stream'
    };

    Upload.upload({
      url: config.api_url + '/api/v1/images',
      data: data,
      headers: {
        crop: JSON.stringify(vm.cropData)
      }
    }).then(function(resp) {
        var data = resp.data;
        if(data._id) {
          UserResource.updateUser(user._id, {imageId: data._id}).then(function() {
            user.imageId = data._id;
            vm.cancel();
          });
        }
    });
  };

  vm.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

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
