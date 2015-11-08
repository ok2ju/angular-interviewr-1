module.exports = function($uibModal) {
  var vm = this;

  vm.open = function() {
    $uibModal.open({
      animation: vm.animationsEnabled,
      templateUrl: 'js/vacancy/manage/create.html',
      controller: 'VacancyCreateController',
      controllerAs: 'vm',
      resolve: {}
    });
  }
};
