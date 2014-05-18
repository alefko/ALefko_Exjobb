'use strict';

dwsApp.controller('dwsAppStartController', function($scope) {

    $scope.buttonOk = buttonOk;
    $scope.buttonOkIsDisabled = false;
    $scope.buttonOkText = "OK";
    $scope.usersTitle = "Current Users";

    $scope.label1 = 'Its awesome';

    $scope.users =
    [
        { name: 'John Doe', city: 'New York' },
        { name: 'Jane Doe', city: 'Las Vegas' },
        { name: 'Andreas Lefkopoulos', city: 'Lund' },
        { name: 'Mats Nilsson', city: 'London' }
    ];
    

    //function CreateListItem() {

    //    //siteUrl will be your host web url.

    //    //app web
    //    var clientContext = SP.ClientContext.get_current();

    //    //host web
    //    var parentCtx = new SP.AppContextSite(clientContext,'https://alefko.sharepoint.com/sites/devel2/');
    //    var oList = parentCtx.get_web().get_lists().getByTitle('Users');
    //    alert(oList.valueOf());


    //    var itemCreateInfo = new SP.ListItemCreationInformation();
    //    this.oListItem = oList.addItem(itemCreateInfo);
    //    oListItem.set_item('Title', 'Jane Doe');
    //    oListItem.set_item('City', 'New York');
    //    oListItem.update();

    //    clientContext.load(oListItem);
    //    clientContext.executeQueryAsync(
    //    Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed)

    //    );
    //}


    //function onQuerySucceeded(sender, args) {
    //    alert('Item created: ' + oListItem.get_id());
    //}

    //function onQueryFailed(sender, args) {
    //    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
    //}

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