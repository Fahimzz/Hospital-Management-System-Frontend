app.controller("doctorapphistory",function($scope,$http,ajax,$location){
  var p=sessionStorage.getItem("Username");
    ajax.get("https://localhost:44367/api/Appointment/"+p+",Done/GetDoctorWiseData",success,error);
    function success(response){
      debugger;
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
