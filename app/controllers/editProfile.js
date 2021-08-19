app.controller("editProfile",function($scope,$http,ajax,$location){

  var a= sessionStorage.getItem("Username");
  ajax.get("https://localhost:44367/api/Doctor/"+a,success,error);

debugger;

    function success(response){
      $scope.u=response.data;
      debugger;
    }
    function error(error){

    }
    $scope.edit = function(u){
      u.Username=a;
      debugger;
       ajax.post("https://localhost:44367/api/Doctor/EditDoctor",u,
       function(resp){
        debugger;
            $location.path("/doctorlist");
       },function(err){});

    };


});
