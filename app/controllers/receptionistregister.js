app.controller("receptionistregister",function($scope,ajax,$location){

  $scope.register = function(d){
    d.Type="Receptionist";
     ajax.post("https://localhost:44367/api/Registration/Add",d,
     function(resp){
          $location.path("/receptionistlist");
     },function(err){});

  };
});
