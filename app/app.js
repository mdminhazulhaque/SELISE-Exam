angular.module('uiRouterSample', [
  'uiRouterSample.start',
  'uiRouterSample.criccard',
  'ui.router'
])

.run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
    }
  ]
)

.config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/start');
    }
  ]
);
