app.controller("appointmentlog",function($scope,$http,ajax){
    ajax.get("https://localhost:44367/api/AppointmentLog/GetAll",success,error);
    function success(response){
      $scope.appointmentlogs=response.data;
    }
    function error(error){

    }

});
