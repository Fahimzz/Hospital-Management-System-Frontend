app.controller("receptionistlist",function($scope,$http,ajax,$location){
    ajax.get("https://localhost:44367/api/Receptionist/GetAll",success,error);
    debugger;
    alert(sessionStorage.getItem("Username"));

    function success(response){
      $scope.receptionist=response.data;
    }
    function error(error){

    }
    $scope.deletedoc = function(d){
      var a= d.Username;
       ajax.delete("https://localhost:44367/api/Login/"+a+"/Delete",
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
