mainApp.controller('startController', function ($scope, startFactory, sharePointFactory) {

    $(document).ready(
        function() {
            init();
        }
    );

    function init() {
        $scope.createSubsite = sharePointFactory.createSubsite("New Subsite Created4", "NewSubSite4", "SubsiteURL4");
    }

    $scope.helloWorld = startFactory.getText();

});