var AugmentedSzczecin = angular.module('AugmentedSzczecin',['ui.router', 'ipCookie']);

AugmentedSzczecin.config(function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/map");
  $stateProvider
    .state('map',{
      url: "/map",
      templateUrl: "src/modules/maps/maps.tmpl.html",
      controller: 'MapController'
    })
    .state('login', {
      url: "/login",
      templateUrl: "src/modules/auth/login.tmpl.html",
      controller: "LoginController"
    })
      .state('newPoi', {
        url: "/newpoi",
        templateUrl: "src/modules/pois/new.poi.tmpl.html",
        controller: "AddPoiController"
      });

});

AugmentedSzczecin.run(['$rootScope', '$state', 'ipCookie', '$window', function ($rootScope, $state, ipCookie, $window){
  $rootScope.$on('apiError', function(e, data) {
    console.log(data);
  });

  if (!ipCookie('user')) {
    $window.location = '/#/login';
    $state.go('login');
  }
}]);
