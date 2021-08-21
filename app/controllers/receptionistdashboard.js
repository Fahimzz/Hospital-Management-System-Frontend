app.controller("receptionistdashboard",function($scope,$location,ajax){
  var a=  sessionStorage.getItem("Username");
    alert(sessionStorage.getItem("Username"));
    $scope.session= function()
    {
      debugger;
      sessionStorage.clear();
      debugger;
      $location.path("/index");

    }
});
