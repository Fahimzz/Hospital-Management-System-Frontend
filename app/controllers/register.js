app.controller("register",function($scope,ajax,$location){

  $scope.register = function(d){
    d.Type="Doctor";
     ajax.post("https://localhost:44367/api/Registration/Add",d,
     function(resp){
          $location.path("/doctorlist");
     },function(err){});

  };
});
