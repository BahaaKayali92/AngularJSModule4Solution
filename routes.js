(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'home.template.html'
  })


  .state('categories', {
    url: '/categories-list',
    templateUrl: 'categories.template.html',
    controller: 'CategoriesController as catList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
  }})


   .state('items', {
    url: '/items-list/{itemId}',
    templateUrl: 'items.template.html',
    controller: 'ItemsController as itemsList',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.itemId);
      }]
  }});
}

})();
