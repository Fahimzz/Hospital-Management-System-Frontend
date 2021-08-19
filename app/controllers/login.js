app.controller("login",function($scope,ajax,$location){

  $scope.login = function(d){

     ajax.get("https://localhost:44367/api/Login/"+d.Username,
     function(resp){
       var u= resp.data;
        var user = u.Username;
        var username;

      /*  function setCookie(username) {
        debugger;
    document.cookie = username + "="  + ";path=/";
    alert(document.cookie);
  }*/

       if(u.Username == d.Username && u.Password == d.Password){
         if(u.Type=="Admin")
         {
           sessionStorage.setItem("Username",user);
           alert(sessionStorage.getItem("Username"));
           debugger;
          // setCookie(d.Username);

          // debugger;
           $location.path("/doctorlist");
         }
         if(u.Type=="Doctor")
         {
           sessionStorage.setItem("Username",user);
           alert(sessionStorage.getItem("Username"));
           debugger;
           $location.path("/patientlist");
         }
         if(u.Type=="Patient")
         {
           sessionStorage.setItem("Username",user);
           alert(sessionStorage.getItem("Username"));
           debugger;
           $location.path("/editPatientProfile");
         }
         if(u.Type=="Receptionist")
         {
           $location.path("/doctorlist");
         }
       }

     },function(err){});

  };
});
