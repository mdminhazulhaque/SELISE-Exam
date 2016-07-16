angular.module('uiRouterSample.start', [
  'ui.router'
])

.config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('start', {
                        url: '/start',
                        templateUrl: 'app/start/start.html'
                    });
    }
  ]
    )
    .controller('ctrlStart', function ($scope, $http, $state, $location) {
        var flag = true;

        $scope.toggleTeam = function () {
            if (!flag) {
                $('#bowlingWho').attr('value', '2');
                $('#team1opt').attr('class', 'disabled');
                $('#team2opt').attr('class', 'nodisabled');
            } else {
                $('#bowlingWho').attr('value', '1');
                $('#team1opt').attr('class', 'nodisabled');
                $('#team2opt').attr('class', 'disabled');
            }
            flag = !flag;
        };

        $scope.startMatch = function () {
            var team1name = $('#team1name').val();
            var team2name = $('#team2name').val();
            var firstWho = $('#bowlingWho').val();

            var Team1Bowling = false;

            if (firstWho == '1')
                Team1Bowling = true;

            var data = {
                "Team1": team1name,
                "Team2": team2name,
                "Team1Bowling": Team1Bowling,
                "Team2Bowling": !Team1Bowling
            };

            //console.log(data);

            $http.post(
                'http://172.16.0.223/CricCard/api/Matches',
                JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).success(function (mdata) {
                console.log(mdata['Id']);
                $location.path('/criccard/' + mdata['Id'] + '/0/0');
                $location.replace();
            });
        };


    });
