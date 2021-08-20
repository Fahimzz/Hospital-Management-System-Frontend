app.controller("appointmentlistforpatient",function($scope,$http,ajax,$location){
   $scope.a=sessionStorage.getItem("Username");
   debugger;
    ajax.get("https://localhost:44367/api/Appointment/"+$scope.a+"/GetPatientWiseData",success,error);
    debugger;
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
