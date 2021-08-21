app.controller("login",function($scope,ajax,$location){

  $scope.login = function(d){

     ajax.get("https://localhost:44367/api/Login/"+d.Username,
     function(resp){
       $scope.error="";
       var u= resp.data;
       if(u==null){

           $scope.error="Invalid User";

       }


      /*  function setCookie(username) {
        debugger;
    document.cookie = username + "="  + ";path=/";
    alert(document.cookie);
  }*/

       else if(u.Username == d.Username && u.Password == d.Password){
         debugger;
          var user = u.Username;
          debugger;
          var username;
         if(u.Type=="Admin")
         {
           sessionStorage.setItem("Username",user);
           alert(sessionStorage.getItem("Username"));
           debugger;
          // setCookie(d.Username);

          // debugger;
           $location.path("/dashboard");
         }
         if(u.Type=="Doctor")
         {
           sessionStorage.setItem("Username",user);
           alert(sessionStorage.getItem("Username"));
           debugger;
           $location.path("/doctordashboard");
         }
         if(u.Type=="Patient")
         {
           sessionStorage.setItem("Username",user);
           alert(sessionStorage.getItem("Username"));
           debugger;
           $location.path("/dashboardpatient");
         }
         if(u.Type=="Receptionist")
         {
           sessionStorage.setItem("Username",user);
           alert(sessionStorage.getItem("Username"));
           debugger;
           $location.path("/receptionistdashboard");
         }
       }

       else {
         $scope.error="Invalid Password"
       }

     },function(err){});

  };
});
