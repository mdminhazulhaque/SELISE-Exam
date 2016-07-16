angular.module('uiRouterSample.criccard', [
  'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('criccard', {
                    name: 'criccard',
                    url: '/criccard/:mid/:oid/:bid',
                    templateUrl: 'app/criccard/criccard.html',
                    controller: 'ctrlCriccard'
                });
    }])
    .controller('ctrlCriccard', function ($scope, $http, $state) {
        var oid = $state.params['oid'];
        var mid = $state.params['mid'];
        var bid = $state.params['bid'];
        $scope.team1 = 'FIXME';
        $scope.team2 = 'FIXME';
        $scope.over = oid;
        //console.log('http://172.16.0.223/CricCard/api/Matches?matchId=' + mid);
        $http.get('http://172.16.0.223/CricCard/api/Matches?matchId=' + mid)
            .success(function (response) {
                $scope.team1 = response['Result'][0]['Team1'];
                $scope.team2 = response['Result'][0]['Team2'];
            });
    });
