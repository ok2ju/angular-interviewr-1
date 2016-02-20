module.exports = function CompanyManageController(Vendor, authService, companyResource) {
  const vm = this;
  const logger = Vendor.logger.get('CompanyManageController');

  authService.me().then((myself) => {
    logger.debug('get me', myself);
    companyResource.list({owner: myself._id}).then((companies) => {
      logger.debug('companies, ', companies);
      vm.companies = companies;
    });
  });
};
