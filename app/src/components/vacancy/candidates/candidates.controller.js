import moment from 'moment';

function mergeDateAndTime(_date, _time) {
  const date = moment(_date);
  const time = moment(_time);

  date.second(time.second());
  date.minutes(time.minutes());
  date.hours(time.hours());

  return date;
}

module.exports = function VacancyCandidatesController(
  vacancyResource, interviewResource, CandidatesService, imageService, $state,
  $stateParams, $uibModal, config) {

  const vm = this;
  const {CALENDAR, CANDIDATES_GRID} = config.states;

  const vacancyId = $stateParams.id;

  vm.getUserImageUrl = imageService.getUserImageUrl;

  $state.go(CANDIDATES_GRID);

  vacancyResource.subscriptions(vacancyId).then(subscriptions => vm.subscriptions = subscriptions);

  vm.openInterviewModal = function(subscription) {
    const modalInstance = $uibModal.open({
      animation: true,
      templateUrl: `${config.ROOT_DIR}/src/components/vacancy/candidates/views/interview-setup-modal.tpl.html`,
      controller: 'InterviewSetupModalCtrl',
      controllerAs: 'vm'
    });

    modalInstance.result.then(onInterviewSetupModalOk);

    function onInterviewSetupModalOk(data) {
      const date = mergeDateAndTime(data.date, data.time);
      const interview = {
        date: date.toDate(),
        candidate: subscription.candidate._id,
        vacancy: vacancyId
      };
      interviewResource.create(interview).then(() => {
        $state.go(CALENDAR);
      });
    }
  };
};
