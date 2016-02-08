module.exports = function CompanyManageController(myself, companyResource) {

  const vm = this;

  companyResource.list({owner: myself._id}).then(function(companies) {
    vm.companies = companies;
  });
};
