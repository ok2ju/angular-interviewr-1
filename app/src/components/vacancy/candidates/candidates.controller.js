import moment from 'moment';

module.exports = function VacancyCandidatesController(
  vacancyResource, interviewResource, CandidatesService, imageService, $state,
  $stateParams, $uibModal, config) {

  const vacancyId = $stateParams.id;

  var vm = this;

  vm.getUserImageUrl = getUserImageUrl;

  $state.go('app.candidates.grid');

  vacancyResource.subscriptions(vacancyId).then(subscriptions => vm.subscriptions = subscriptions);

  vm.openInterviewModal = (subscription) => {
    $uibModal.open({
      animation: true,
      templateUrl: `${config.root_dir}/src/components/vacancy/candidates/views/interview-setup-modal.tpl.html`,
      controller: 'InterviewSetupModalCtrl',
      controllerAs: 'vm',
      resolve: {
        cb: () => onInterviewSetupModalOk
      }
    });

    function mergeDateAndTime(_date, _time) {
      const date = moment(_date);
      const time = moment(_time);

      date.second(time.second());
      date.minutes(time.minutes());
      date.hours(time.hours());

      return date;
    }


    function onInterviewSetupModalOk(data) {
      const date = mergeDateAndTime(data.date, data.time);
      const interview = {
        date: date.toDate(),
        candidate: subscription.candidate._id,
        vacancyId: vacancyId
      }

      interviewResource.postInterview(interview);
      console.log(interview);
    }
  }

  /*CandidatesService.success(function(data) {
      vm.candidates = data;
  });*/

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, 'assets/images/user-default.png');
  }
};
