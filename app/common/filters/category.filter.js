require('angular')
  .module('app.filter.category', [])
    .filter('categoryFilter', categoryFilter);

function categoryFilter() {
  return function(items, source) {
    if (!angular.isDefined(source) || source == '' || source == 'All') return items;
    return items.filter(function(company) {
        return company.category == source;
    });
  };
}
