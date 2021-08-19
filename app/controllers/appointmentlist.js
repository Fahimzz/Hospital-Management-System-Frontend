app.controller("appointmentlist",function($scope,$http,ajax){
    ajax.get("https://localhost:44367/api/Appointment/GetAll",success,error);
    function success(response){
      $scope.appointments=response.data;
    }
    function error(error){

    }

});
