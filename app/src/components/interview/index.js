import angular from 'angular';
import {ROOT_DIR} from '../../constants';

angular
  .module('app.interview', [
      'app.interview.feedback',
      'app.interview.feedbackform'
    ])
    .config(interviewConfig);

require('./feedback');
require('./feedbackform');

function interviewConfig($stateProvider) {
  $stateProvider
    .state('app.interviewfeedback', {
      url: '/interview/:id/feedback',
      templateUrl: `${ROOT_DIR}/src/components/interview/feedback/feedback.tpl.html`,
      controller: 'InterviewFeedbackController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Interview feedback'
      }
    })
    .state('app.interviewfeedbackform', {
      url: '/interview/:id/feedbackform',
      templateUrl: `${ROOT_DIR}/src/components/interview/feedbackform/feedback-form.tpl.html`,
      controller: 'FeedbackFormController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Interview feedback form'
      }
    })
}
