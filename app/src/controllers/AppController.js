module.exports = function($scope, $mdSidenav, $mdToast) {
    $scope.toggle = function() {
        $mdSidenav('left').toggle();
    };

    $scope.openToast = function($event) {
        $mdToast.show($mdToast.simple().textContent('Hello!'));
        // Could also do $mdToast.showSimple('Hello');
    };
}
