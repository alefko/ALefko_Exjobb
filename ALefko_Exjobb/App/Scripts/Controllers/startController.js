'use strict';

mainApp.controller('startController', function ($scope, startFactory, sharePointFactory) {

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
        var dfd = $.Deferred();

        $.when(
             sharePointFactory.createSubsite("New Subsite Created", "NewSubSite", "SubsiteURL")
            )
           .then(
               function () {
                   alert('Promise fullfilled');
                   hasBeenInitialized = true;
                   dfd.resolve();
               },
               function () {
                   alert('Promise Failed');
                   hasBeenInitialized = true;
                   dfd.reject();
               });
        context.executeQueryAsync(Function.createDelegate(this, function(){}), Function.createDelegate(this, function (){}));

        function success() {
            alert('inside sucess');
            //dfd.resolve();
        }

        function fail() {
            alert('inside fail');
            //dfd.reject();
        }

        return dfd.promise();


    }

    function buttonOk() {

        $scope.buttonOkIsDisabled = true;
        $scope.buttonOkText = "Processing";

        initApp().then(
            function() {
                alert('App Initilazation was Successfull');
                $scope.buttonOkIsDisabled = true;
                $scope.buttonOkText = "Done";
            },
            function () {
                $scope.buttonOkIsDisabled = false;
                $scope.buttonOkText = "why";
                alert('App initilazation Failed');
                
            });

    }

});