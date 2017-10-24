//$interval service will run program automatically
app.controller('myCtrl', function($scope, $interval, $rootScope) {
    $scope.timeleft=3;

    $scope.downloadTimer = $interval(function(){
        $scope.timeleft--;
        if($scope.timeleft==0) {
            $scope.resetCount();
            moveTo('../index.html');
        } },1000);

    $scope.resetCount = function() {
        $scope.timeleft = null;
    };

    var dereg = $rootScope.$on('$locationChangeSuccess', function() {
        $interval.cancel($scope.downloadTimer);
        dereg();
    });
});

app.controller('urlCtrl', function($scope, $location) {
    $scope.go = function ( path ) {
        $location.path( path );
    };

    $scope.moveTo = function(url) {
        window.location.href = url;
    };
});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "html/route_menu.html",
            controller: "urlCtrl"
        })
        .when("/card-tap-first", {
            templateUrl: "html/route_card-tap-first.html",
            controller: "urlCtrl"
        })
        .when("/card-tap-first-failed", {
            templateUrl: "html/route_card-tap-first-failed.html",
            controller: "myCtrl"
        })
        .when("/top-up", {
            templateUrl: "html/route_top-up.html",
            controller: "myCtrl"
        })
        .when("/swipe", {
            templateUrl: "html/route_swipe.html",
            controller: "myCtrl"
        })
        .when("/swipe-failed", {
            templateUrl: "html/route_swipe-failed.html",
            controller: "myCtrl"
        })
        .when("/pin-entry", {
            templateUrl: "html/route_pin-entry.html"
        })
        .when("/cc-auth", {
            templateUrl: "html/route_cc-auth.html",
            controller: "myCtrl"
        })
        .when("/cc-auth-failed", {
            templateUrl: "html/route_cc-auth-failed.html",
            controller: "myCtrl"
        })
        .when("/debit-card-balance-sufficiency", {
            templateUrl: "html/route_debit-card-balance-sufficiency.html",
            controller: "myCtrl"
        })
        .when("/card-tap-last", {
            templateUrl: "html/route_card-tap-last.html",
            controller: "urlCtrl"
        })
        .when("/card-tap-last-failed", {
            templateUrl: "html/route_card-tap-last-failed.html",
            controller: "myCtrl"
        })
        .when("/update-successful", {
            templateUrl: "html/route_update-successful.html",
            controller: "myCtrl"
        });
});