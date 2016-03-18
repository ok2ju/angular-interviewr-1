import angular from 'angular';

angular
  .module('app.interview.feedbackform', ['toastr'])
    .controller('FeedbackFormController', require('./form.controller'));
