app.controller("doctorapp",function($scope,$http,ajax,$location){
  var p=sessionStorage.getItem("Username");
    ajax.get("https://localhost:44367/api/Appointment/"+p+",Accepted/GetDoctorWiseData",success,error);
    function success(response){
      debugger;
      $scope.appointments=response.data;
    }
    function error(error){

    }
    $scope.done = function(a){
      var b= a.Patients;

      var d= a.Id;
      var v= null;
       ajax.post("https://localhost:44367/api/Appointment/"+b+","+p+","+d+"/Done",v,
       function(response){
         debugger;
            location.reload();
       },function(error){});

    };
    $scope.session= function()
    {
      debugger;
      sessionStorage.clear();
      debugger;
      $location.path("/index");

    }

});
