app.controller('listCtrl',['$scope','listFactory', function($scope, listFactory) {
   $scope.activeParentIndex;
   $scope.newList = " ";
   $scope.showError =true;
	
	var getAll = function(){
		listFactory.selectList().then(function successCallback(response) {
  		$scope.toDoLists = response.data;
      if($scope.toDoLists){
              //get maximum value from object and increase by 1
        $scope.nxtListId = Number(Math.max.apply(Math,$scope.toDoLists .map(function(o){return o.id;}))) + Number(1);
      }else{
          //if object is empty, id of new added item should be 0
        $scope.nxtListId = 0;
      }

      },function errorCallback(response) {
         $scope.showError =false;
    });
	};
   
   getAll();



    $scope.showEdit = function (index) {
        $scope.activeParentIndex = index;
    };
    
    $scope.isShowing = function(index){
        return  $scope.activeParentIndex === index;
    };

    $scope.updateList = function(value, id){
      listFactory.updateList(value, id).then(function successCallback(response) {
          getAll();
      }, function errorCallback(response) {
          $scope.showError =false;
      });

		  $scope.activeParentIndex = "";
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