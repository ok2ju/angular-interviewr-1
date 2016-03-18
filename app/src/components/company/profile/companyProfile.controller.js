module.exports = function CompanyProfileController(authService, companyResource, vacancyResource, $state, $stateParams, config, imageService, toastr) {
  const vm = this;

  vm.comment = {};
  vm.getImageUrl = getImageUrl;
  vm.getUserImageUrl = getUserImageUrl;

  companyResource.one($stateParams.id).then(function(company) {
    vm.company = company;
    vm.owner = company.owner;
  });

  vacancyResource.list({company_id: $stateParams.id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });

  companyResource.comments($stateParams.id).then((comments) => {
    vm.comments = comments;
  });

  authService.me().then((myself) => {
    vm.leaveComment = function(comment) {
      let companyID = $stateParams.id;
      vm.comment.author = {
        id: myself._id,
        name: myself.name,
        surname: myself.surname,
        imageId: myself.imageId
      };

      if(angular.isDefined(vm.comment.text)) {
        companyResource.comment(companyID, vm.comment).then(function() {
          $state.go($state.current, {}, { reload: true });
        });
      } else {
        toastr.error('You must fill in comment field.', 'Error!');
      }
    };

    vm.removeComment = function(id) {
      let companyID = $stateParams.id;
      companyResource.removeComment(companyID, id).then(function() {
        $state.go($state.current, {}, { reload: true });
      });
    };
  });

  function getImageUrl() {
    return imageService.getCompanyImageUrl(vm.company);
  }

  function getUserImageUrl(user) {
    return imageService.getUserImageUrl(user);
  }
};
