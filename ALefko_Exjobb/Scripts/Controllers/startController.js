mainApp.controller('startController', function ($scope, startFactory, sharePointFactory) {

    // ---------------- $scope Functions ----------------
    $scope.buttonOk = buttonOk;
    $scope.buttonOkIsDisabled = false;

   
    // ---------------- Functions ----------------

    function initApp() {
        sharePointFactory.createSubsite("New Subsite Created", "NewSubSite", "SubsiteURL");
    }

    function buttonOkDisable() {
        $scope.buttonOkIsDisabled = true;
    }

    function buttonOk() {
        initApp();
        //alert();
        buttonOkDisable();

        
    }

});