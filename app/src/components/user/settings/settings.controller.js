module.exports = function SettingsController(toastr, $state, $http, $uibModal,
                      config, Upload, countries, authService, imageService, Vendor) {

  const {$} = Vendor;
  const {moment} = Vendor;
  const logger = Vendor.logger.get('SettingsController');

  const vm = this;
  vm.user = {};

  // Fetch countries for dropdown
  vm.countries = countries.data;

  authService.me().then((myself) => {
    vm.user = myself;
    vm.user.social = vm.user.social || {};
    /*vm.user.experiences = vm.user.experiences || [{id: 'exp1'}];*/

    if(myself.dob) {
      vm.user.dob = moment(myself.dob).toDate();
    }
    vm.user.dob = moment().toDate();

    if(!vm.user.experiences) {
      vm.user.experiences = [{}];
    }
  });

  vm.updateProfile = updateProfile;
  vm.loadTags = loadTags;
  vm.addNewExperience = addNewExperience;
  vm.deleteExperience = deleteExperience;

  vm.getImageUrl = function() {
    return imageService.getUserImageUrl(vm.user);
  };

  function addNewExperience() {
    const newItemId = vm.user.experiences.length + 1;
    vm.user.experiences.push({id: 'exp' + newItemId});
  }

  function deleteExperience(id) {
    var index = vm.user.experiences.indexOf(id);
    vm.user.experiences.splice(index, 1);
  }

  function updateProfile(isValid) {
    if(isValid) {
      vm.user.put().then(function() {
        $state.go($state.current, {}, { reload: true });
        toastr.success('Your settings was successfully updated.', 'Yay!');
      }, function(err) {
        toastr.error('Error while updating.', 'Error!');
      });
    }
  }

  function loadTags(query) {
    return $http.get('./api/tags.json');
  }

  //file upload
  vm.onFileSelected = function() {
    if(vm.file) {
      vm.open();
    }
  };

  vm.openFileDialog = function() {
    $('#up-photo').click();
  };

  // modal window
  vm.animationsEnabled = true;

  vm.open = function (size) {
    $uibModal.open({
      animation: vm.animationsEnabled,
      templateUrl: `${config.ROOT_DIR}/src/components/user/settings/modal.tpl.html`,
      controller: 'ModalInstanceController',
      controllerAs: 'vm',
      size: size,
      resolve: {
        file() {
          return vm.file;
        },
        user() {
          return vm.user;
        }
      }
    });
  };

  vm.toggleAnimation = function () {
    vm.animationsEnabled = !vm.animationsEnabled;
  };

  // Datepicker options

  vm.maxDate = new Date(2020, 5, 22);

  vm.openDatepicker = function($event) {
    vm.status.opened = true;
  };

  vm.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  vm.format = vm.formats[0];

  vm.status = {
    opened: false
  };
};
