app.controller("patientlist",function($scope,$http,ajax,$location){
    ajax.get("https://localhost:44367/api/Patient/GetAll",success,error);
    debugger;
    alert(sessionStorage.getItem("Username"));
    function success(response){
      $scope.patients=response.data;
    }
    function error(error){

    }
    $scope.deletepatient = function(p){
      var a= p.Username;
       ajax.delete("https://localhost:44367/api/Patient/"+a+"/Delete",
       function(response){
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
