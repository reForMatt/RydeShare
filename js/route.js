var myApp;
myApp = angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'route.html',
      })
      .when('/Book/:bookId/ch/:chapterId', {
        templateUrl: 'chapter.html',
        controller: 'ChapterCtrl',
        controllerAs: 'chapter'
      });

    $locationProvider.html5Mode(true);
}]);

angular.bootstrap(document.getElementById("module2"), ['myApp']);
