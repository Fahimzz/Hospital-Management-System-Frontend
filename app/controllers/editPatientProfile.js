app.controller("editPatientProfile",function($scope,$http,ajax,$location){

  var p = sessionStorage.getItem("Username");
  ajax.get("https://localhost:44367/api/Patient/"+p,success,error);

debugger;

    function success(response){
      $scope.u=response.data;
      debugger;
    }
    function error(error){

    }
    $scope.edit = function(u){
      u.Username=p;
      debugger;
       ajax.post("https://localhost:44367/api/Patient/EditPatient",u,
       function(resp){
        debugger;
              location.reload();
       },function(err){});

    };


});
