'use strict';

mainApp.controller('startController', function ($scope, startFactory, sharePointFactory, loggerFactory) {

   

    // ---------------- $scope Functions ----------------
    $scope.buttonOk = buttonOk;
    $scope.buttonOkIsDisabled = false;
    $scope.buttonOkText = "OK";

    var hasBeenInitialized = false;

    if (!hasBeenInitialized) {
        $scope.buttonOkText = 'OK';
        $scope.buttonOkIsDisabled = false;
    } 
    else {
        $scope.buttonOkIsDisabled = true;
        $scope.buttonOkText = 'Done';
    }
   
    // ---------------- Functions ----------------

    function initApp() {
        loggerFactory.log('Initilazation of App started');
        var dfd = $.Deferred();

        $.when(
             sharePointFactory.createSubsite("Alefko Exjobb Documents", "Exjobb Documents", "exjdocuments")
            )
           .then(
               function () {
                   //alert('Promise fullfilled');
                   hasBeenInitialized = true;
                   dfd.resolve();
               },
               function () {
                   //alert('Promise Failed');
                   hasBeenInitialized = true;
                   dfd.reject();
               });
        context.executeQueryAsync(Function.createDelegate(this, function(){}), Function.createDelegate(this, function (){}));

        function success() {
            //alert('inside sucess');
            //dfd.resolve();
        }

        function fail() {
            //alert('inside fail');
            //dfd.reject();
        }

        return dfd.promise();


    }

    function buttonOk() {

        $scope.buttonOkIsDisabled = true;
        $scope.buttonOkText = "Processing";

        var workingOnItDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Initializing App', 'Grab a coffee while we do awesome work for you', 150, 530);

        initApp().then(
            function() {
                //alert('App Initilazation was Successfull');
                $scope.buttonOkIsDisabled = true;
                $scope.buttonOkText = "Done";
                $scope.$apply();
                loggerFactory.log('Initilazation of App: DONE');
            },
            function () {
                $scope.buttonOkIsDisabled = false;
                $scope.buttonOkText = "OK";
                //alert('App initilazation Failed');
                $scope.$apply();
                
                loggerFactory.log('Initilazation of App: Failed');
            })
        .always(
        function() {
            workingOnItDialog.close();
        });
    }

});