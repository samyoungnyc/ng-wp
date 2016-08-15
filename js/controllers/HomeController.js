app.controller('HomeController', ['$scope', '$firebaseArray', '$firebaseObject', 'FBURL', function($scope, $firebaseArray, $firebaseObject, FBURL){
  
  var projects = new Firebase(FBURL);
  $scope.projects = $firebaseArray(projects);
 
}]);

 