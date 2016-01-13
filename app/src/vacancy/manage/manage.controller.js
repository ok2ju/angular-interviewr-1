module.exports = function VacancyManageController(myself, VacancyResource, CompanyResource, $stateParams, config) {
  var vm = this;

  vm.getImageUrl = getImageUrl;

  CompanyResource.listCompanies({owner: myself._id}).then(function(companies) {
    vm.companies = companies;
  });

  function getImageUrl(company) {
    var res = '';
    if(company && company.imageId) {
      res = config.api_url + '/api/v1/images/' + company.imageId;
    } else {
      res = 'assets/images/companies/default.png';
    }
    return res;
  }

};
