var app = angular.module("myApp", ["ngRoute"]);
app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider) {

    $routeProvider
    .when("/", {
        templateUrl : "views/pages/index.html",

    })
    .when("/doctorlist", {
        templateUrl : "views/pages/doctor-list.html",
        controller: 'doctorlist'
    })
    .when("/demo", {
        templateUrl : "views/pages/demopage.html",
        controller: 'demo'
    })
    .when("/demo2", {
        templateUrl : "views/pages/demo2.html",
          controller: 'demo2'
    })
    .when("/products", {
        templateUrl : "views/pages/products.html",
        controller: 'products'
    })
    .when("/patientlist", {
        templateUrl : "views/pages/patient-list.html",
        controller: 'patientlist'
    })
    .when("/appointmentlist", {
        templateUrl : "views/pages/appointment-list.html",
        controller: 'appointmentlist'
    })
    .when("/appointmentlog", {
        templateUrl : "views/pages/appointment-log.html",
        controller: 'appointmentlog'
    })
    .when("/register", {
        templateUrl : "views/pages/register.html",
        controller: 'register'
    })
    .when("/login", {
        templateUrl : "views/pages/login.html",
        controller: 'login'
    })
    .when("/editProfile", {
        templateUrl : "views/pages/profile.html",
        controller: 'editProfile'
    })
    .when("/editPatientProfile", {
        templateUrl : "views/pages/patientProfile.html",
        controller: 'editPatientProfile'
    })
    .when("/dashboard", {
        templateUrl : "views/pages/Dashboard.html",
        controller: 'dashboard'

    })
    .when("/patientlog", {
        templateUrl : "views/pages/patientlog.html",
        controller: 'patientlog'

    })
    .when("/acceptedapp", {
        templateUrl : "views/pages/acceptedapp.html",
        controller: 'acceptedapp'

    })
    .when("/pendingapp", {
        templateUrl : "views/pages/pendingapp.html",
        controller: 'pendingapp'

    })
    .when("/dashboardpatient", {
        templateUrl : "views/pages/dashboardpatient.html",
        controller: 'dashboardpatient'

    })
    .when("/doctorlistforpatient", {
        templateUrl : "views/pages/doctorlistforpatient.html",
        controller: 'doctorlistforpatient'

    })
    .when("/appointmentlistforpatient", {
        templateUrl : "views/pages/appointmentlistforpatient.html",
        controller: 'appointmentlistforpatient'

    })
    .when("/patientregister", {
        templateUrl : "views/pages/patientregister.html",
        controller: 'patientregister'

    })
    .when("/receptionistlist", {
        templateUrl : "views/pages/receptionist-list.html",
        controller: 'receptionistlist'

    })
    .when("/receptionistregister", {
        templateUrl : "views/pages/receptionistregister.html",
        controller: 'receptionistregister'

    })
    .otherwise({
        redirectTo:"/"
    });
      //$locationProvider.html5Mode(true);
      //$locationProvider.hashPrefix('');
      //if(window.history && window.history.pushState){
      //$locationProvider.html5Mode(true);
  //}

}]);
