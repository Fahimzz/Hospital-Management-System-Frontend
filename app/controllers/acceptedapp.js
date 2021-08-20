app.controller("acceptedapp",function($scope,$http,ajax,$location){
    ajax.get("https://localhost:44367/api/Appointment/Accepted/GetStatusWiseData",success,error);
    function success(response){
      $scope.appointments=response.data;
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
