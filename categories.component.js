(function(){

	'use strict';

angular.module('MenuApp')
.component('categoriesList',{
	 templateUrl: 'categories.component.template.html',
     bindings: {
     items: '<'
  }
});
})();