module.exports = function CompanyProfileController(companyResource, vacancyResource, commentResource, $state, $stateParams, config, imageService, toastr) {
  const vm = this;

  vm.comment = {};
  vm.getImageUrl = getImageUrl;
  vm.getUserImageUrl = getUserImageUrl;
  vm.leaveComment = leaveComment;
  vm.removeComment = removeComment;

  companyResource.one($stateParams.id).then(function(company) {
    vm.company = company;
    vm.owner = company.owner;
  });

  vacancyResource.list({company_id: $stateParams.id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });

  commentResource.list({company: $stateParams.id}).then((comments) => {
    vm.comments = comments;
  });

  function getImageUrl() {
    return imageService.getCompanyImageUrl(vm.company);
  }

  function getUserImageUrl(user) {
    return imageService.getUserImageUrl(user);
  }

  function leaveComment(comment) {
    vm.comment.company = $stateParams.id;

    if(angular.isDefined(vm.comment.text)) {
      console.log(vm.comment);
      commentResource.create(vm.comment).then(function() {
        $state.go($state.current, {}, { reload: true });
      });
    } else {
      toastr.error('You must fill in comment field.', 'Error!');
    }
  }

  function removeComment(id) {
    commentResource.remove(id).then(function() {
      $state.go($state.current, {}, { reload: true });
    });
  }
};
