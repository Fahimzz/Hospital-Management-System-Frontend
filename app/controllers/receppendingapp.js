app.controller("receppendingapp",function($scope,$http,ajax,$location){
    ajax.get("https://localhost:44367/api/Appointment/Pending/GetStatusWiseData",success,error);
    function success(response){
      $scope.appointments=response.data;
    }
    function error(error){

    }
    $scope.request = function(a){
      var b= a.Patients;
      var c= a.Doctors;
      var d= a.Id;
      var v= null;
       ajax.post("https://localhost:44367/api/Appointment/"+b+","+c+","+d+"/Accept",v,
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
