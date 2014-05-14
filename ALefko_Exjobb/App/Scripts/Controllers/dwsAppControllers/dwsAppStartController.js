'use strict';

dwsApp.controller('dwsAppStartController', function($scope) {

    $scope.buttonOk = buttonOk;
    $scope.buttonOkIsDisabled = false;
    $scope.buttonOkText = "OK";

    $scope.label1 = 'Its awesome';

    function buttonOk() {

        //$scope.buttonOkIsDisabled = true;
        //$scope.buttonOkText = "Processing";

        //var workingOnItDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Initializing App', 'Grab a coffee while we do awesome work for you', 150, 530);

        //initApp().then(
        //    function() {
        //        //alert('App Initilazation was Successfull');
        //        $scope.buttonOkIsDisabled = true;
        //        $scope.buttonOkText = "Done";
        //        $scope.$apply();
        //        loggerFactory.log('Initilazation of App: DONE');
        //    },
        //    function () {
        //        $scope.buttonOkIsDisabled = false;
        //        $scope.buttonOkText = "OK";
        //        //alert('App initilazation Failed');
        //        $scope.$apply();

        //        loggerFactory.log('Initilazation of App: Failed');
        //    })
        //.always(
        //function() {
        //    workingOnItDialog.close();
        //});
    }
});