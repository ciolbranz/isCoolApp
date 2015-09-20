// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.task', {
      url: '/tasks',
      views: {
        'menuContent': {
          templateUrl: 'templates/tasks.html',
          controller: 'isCoolTasksCtrl'
        }
      }
    })
    .state('app.grade', {
      url: '/tasks/grade',
      views: {
        'menuContent': {
          templateUrl: 'templates/grade.html',
          controller: 'isCoolGradeCtrl'
        }
      }
    })
    .state('app.syllabus', {
      url: '/tasks/syllabus',
      views: {
        'menuContent': {
          templateUrl: 'templates/syllabus.html',
          controller: 'isCoolSyllabusCtrl'
        }
      }
    })
    .state('app.announce', {
      url: '/tasks/announce',
      views: {
        'menuContent': {
          templateUrl: 'templates/announce.html',
          controller: 'isCoolAnnounceCtrl'
        }
      }
    })
    .state('app.discuss', {
      url: '/tasks/discuss',
      views: {
        'menuContent': {
          templateUrl: 'templates/discuss.html',
          controller: 'isCoolDiscussCtrl'
        }
      }
    })
    .state('app.taskdetail', {
    url: '/tasks/:taskId',
    views: {
      'menuContent': {
        templateUrl: 'templates/task.html',
        controller: 'isCoolTaskCtrl'
      }
    }
  })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/tasks');
});
