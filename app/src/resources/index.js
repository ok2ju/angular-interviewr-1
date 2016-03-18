import angular from 'angular';

angular
  .module('app.resources', [])
    .factory('userResource', require('./User').UserResource)
    .factory('companyResource', require('./Company').CompanyResource)
    .factory('vacancyResource', require('./Vacancy').VacancyResource)
    .factory('metaResource', require('./Meta').MetaResource)
    .factory('interviewResource', require('./Interview').InterviewResource)
    .factory('subscriptionResource', require('./Subscription').SubscriptionResource);
