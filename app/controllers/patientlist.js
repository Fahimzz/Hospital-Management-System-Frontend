app.controller("patientlist",function($scope,$http,ajax){
    ajax.get("https://localhost:44367/api/Patient/GetAll",success,error);
    debugger;
    alert(sessionStorage.getItem("Username"));
    function success(response){
      $scope.patients=response.data;
    }
    function error(error){

    }

});
