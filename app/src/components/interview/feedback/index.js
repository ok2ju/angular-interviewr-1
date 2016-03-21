import angular from 'angular';
import {StarRating} from './stars.directive';

angular
  .module('app.interview.feedback', ['toastr'])
    .controller('InterviewFeedbackController', require('./feedback.controller'))
    .directive('starRating', StarRating);
