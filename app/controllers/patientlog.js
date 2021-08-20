app.controller("patientlog",function($scope,$http,ajax,$location){
    ajax.get("https://localhost:44367/api/Patient/GetAllLog",success,error);
    debugger;
    alert(sessionStorage.getItem("Username"));

    function success(response){
      $scope.patientlog=response.data;
    }
    function error(error){

    }

    $scope.session= function()
    {
      debugger;
      sessionStorage.clear();
      debugger;
      $location.path("/index");

    }

});
