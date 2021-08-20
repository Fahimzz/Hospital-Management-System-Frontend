app.controller("patientregister",function($scope,ajax,$location){

  $scope.register = function(d){
    d.Type="Patient";
     ajax.post("https://localhost:44367/api/Registration/Add",d,
     function(resp){
          $location.path("/");
     },function(err){});

  };
});
