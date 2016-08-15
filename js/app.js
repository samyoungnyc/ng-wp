var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  })
  $routeProvider
  .when('/past', {
    controller: 'PastController',
    templateUrl: 'views/past.html'
  })
  .when('/present', {
    controller: 'PresentController',
    templateUrl: 'views/present.html'
  })
  .when('/future', {
    controller: 'FutureController',
    templateUrl: 'views/future.html'
  })
  .when('/spaces', {
    controller: 'SpacesController',
    templateUrl: 'views/spaces.html'
  })
  .when('/project/:id', {
    controller: 'ProjectController',
    templateUrl: 'views/project.html' //how to add specific :id here? 
  })
  .when('/search/:search-term', {  // is :search-term allowed?
    controller: 'SearchResultsController',
    templateUrl: 'views/search-results.html' 
  })
  .otherwise({
    redirectTo: '/'
  });
});

app.constant('FBURL', 
  'https://wallplay-a8440.firebaseio.com/'
);