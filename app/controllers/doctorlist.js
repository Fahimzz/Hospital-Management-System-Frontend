app.controller("doctorlist",function($scope,$http,ajax,$location){
    ajax.get("https://localhost:44367/api/Doctor/GetAll",success,error);
    debugger;
    alert(sessionStorage.getItem("Username"));

    function success(response){
      $scope.doctors=response.data;
    }
    function error(error){

    }
    $scope.deletedoc = function(d){
      var a= d.Username;
       ajax.delete("https://localhost:44367/api/Doctor/"+a+"/Delete",
       function(response){
            location.reload();
       },function(error){});

    };

});
