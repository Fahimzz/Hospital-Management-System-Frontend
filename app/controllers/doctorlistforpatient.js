app.controller("doctorlistforpatient",function($scope,$http,ajax,$location){
    ajax.get("https://localhost:44367/api/Doctor/GetAll",success,error);
    debugger;
    alert(sessionStorage.getItem("Username"));
    var p=sessionStorage.getItem("Username");
    var v= null;

    function success(response){
      $scope.doctors=response.data;
    }
    function error(error){

    }
    $scope.request = function(d){
      var a= d.Username;
       ajax.post("https://localhost:44367/api/Appointment/"+p+","+a+"/Request",v,
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
