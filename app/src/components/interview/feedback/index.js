import angular from 'angular';

angular
  .module('app.interview.feedback', ['toastr'])
    .controller('InterviewFeedbackController', require('./feedback.controller'));
