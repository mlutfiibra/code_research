/*url.controller('urlCtrl', function ($scope, $log, $window) {
    $scope.routeTo = function (url) {
        $log.log(url);
        $window.location.href = url;
    };

});*/

url.controller('urlCtrl', function ($scope, $log, $window) {
    $scope.changeRoute=function(view) {
		$location.path(view);
	};	
});