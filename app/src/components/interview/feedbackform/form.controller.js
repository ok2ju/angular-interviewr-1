module.exports = function FeedbackFormController($state, $stateParams, toastr, config) {
  const vm = this;
  vm.addPersonalSkill = addPersonalSkill;
  vm.removePersonalSkill = removePersonalSkill;
  vm.addTechnicalSkill = addTechnicalSkill;
  vm.removeTechnicalSkill = removeTechnicalSkill;

  vm.feedback = {};

  vm.feedback.personal = [
    {
      id: '1'
    }
  ];
  vm.feedback.technical = [
    {
      id: '1'
    }
  ];

  // Manage personal skills
  function addPersonalSkill() {
    vm.feedback.personal.push({
      id: vm.feedback.personal.length + 1
    });
  }

  function removePersonalSkill(id) {
    var index = vm.feedback.personal.indexOf(id);
    vm.feedback.personal.splice(index, 1);
  }

  // Manage technical skills
  function addTechnicalSkill() {
    vm.feedback.technical.push({
      id: vm.feedback.personal.length + 1
    });
  }

  function removeTechnicalSkill(id) {
    var index = vm.feedback.technical.indexOf(id);
    vm.feedback.technical.splice(index, 1);
  }
};
