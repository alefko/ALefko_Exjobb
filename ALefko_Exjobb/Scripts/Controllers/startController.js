mainApp.controller('startController', function ($scope, startFactory, sharePointFactory) {

    $(document).ready(
        function() {
            init();
        }
    );

    function init() {
        $scope.createSubsite = sharePointFactory.createSubsite();
    }

    $scope.helloWorld = startFactory.getText();

});