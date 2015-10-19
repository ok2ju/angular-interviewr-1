var $ = require('jquery');

module.exports = function($modalInstance, ngFileUpload) {
  var vm = this;

  vm.ok = function () {
    /*$modalInstance.close(vm.selected.item);*/
  };

  vm.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

   angular.element(document).ready(function() {
    init();
   });

  function init() {
    $('.modal-body > img').cropper({
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
