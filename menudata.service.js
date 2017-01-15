(function(){
	'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService);
MenuDataService.$inject=['$http'];
function MenuDataService($http){
	var service = this;
	service.getAllCategories = function (){
//get data via http
//  https://davids-restaurant.herokuapp.com/categories.json
	var promise = $http({
       method: "GET",
       url: ('https://davids-restaurant.herokuapp.com/categories.json')
    });
        console.log(promise);
    return promise;
}

service.getItemsForCategory = function(categoryShortName){
//get one category via http
// https://davids-restaurant.herokuapp.com/menu_items.json?category=
console.log(categoryShortName);
	var promise = $http({
       method: "GET",
       url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName)
    });

    return promise;
}
}

})();