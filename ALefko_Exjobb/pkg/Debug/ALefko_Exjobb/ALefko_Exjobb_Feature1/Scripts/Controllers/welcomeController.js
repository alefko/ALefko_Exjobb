mainApp.controller('startController', function ($scope, welcomeFactory, sharePointFactory) {

    $(document).ready(
        function() {
            init();
        }
    );

    function init() {
        $scope.createSubsite = sharePointFactory.createSubsite();
    }
    
});