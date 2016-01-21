app.controller('listCtrl',['$scope','listFactory', function($scope, listFactory) {
   $scope.activeListIndex;
   $scope.newList = " ";
   $scope.showError =true;

   var getAll = function(){
    listFactory.selectList().then(function successCallback(response) {
      console.log(response);
      $scope.businessInfo = response.data;

      },function errorCallback(response) {
         $scope.showError =false;
      });
  };

// get all list on page load
  getAll();

  $scope.showEdit = function (index) {
    $scope.activeListIndex = index;
  };

  $scope.isShowing = function(index){
    return  $scope.activeListIndex === index;
  };

  $scope.updateList = function(value, id){
    listFactory.updateList(value, id).then(function successCallback(response) {
      getAll();
    }, function errorCallback(response) {
      $scope.showError =false;
    });

    $scope.activeListIndex = "";
  };

  $scope.deleteList = function(id){
    listFactory.deleteList(id).then(function successCallback(response) {
      getAll();
    }, function errorCallback(response) {
      $scope.showError =false;
    });
  };

  $scope.addNew = function(value, id){
    listFactory.insertList(value, id).then(function successCallback(response) {
      getAll();
    }, function errorCallback(response) {
      $scope.showError =false;
    });
  };

}]);
