app.factory('listFactory', ['$http', function($http) {

    var listFactory ={};
    var urlBase = "http://localhost:3000/lists";


    listFactory.insertList = function (value, id) {
        var data = {name :value, id: id};
        return $http.post(urlBase, data);
    };

    listFactory.selectList = function () {
        return $http.get(urlBase);
    };

    listFactory.updateList = function (value, id) {
        var data ={name:value};
        return $http.put(urlBase+id, data);
    };


     listFactory.deleteList = function (id) {

        return $http.delete(urlBase+id);
    };


    return listFactory;

	}]);