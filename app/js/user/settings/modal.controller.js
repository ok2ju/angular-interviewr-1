var $ = require('jquery');

module.exports = function ModalController($modalInstance, $timeout, Upload, file) {
  var vm = this;

  vm.file = file;

  vm.ok = function () {
    /*$modalInstance.close(vm.selected.item);*/
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
        // Output the result data for cropping image.
        console.log(e.x);
        console.log(e.y);
        console.log(e.width);
        console.log(e.height);
        console.log(e.rotate);
        console.log(e.scaleX);
        console.log(e.scaleY);
      },
      movable: false,
      zoomable: false,
      rotatable: false,
      scalable: false
    });
  }
};
