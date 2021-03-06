﻿'use strict';

//var context = SP.ClientContext.get_current();
//var user = context.get_web().get_currentUser();

//// This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
//$(document).ready(function () {
//    getUserName();
//});

//// This function prepares, loads, and then executes a SharePoint query to get the current users information
//function getUserName() {
//    context.load(user);
//    context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
//}

//// This function is executed if the above call is successful
//// It replaces the contents of the 'message' element with the user name
//function onGetUserNameSuccess() {
//    $('#message').text('Hello ' + user.get_title());
//}

//// This function is executed if the above call fails
//function onGetUserNameFail(sender, args) {
//    alert('Failed to get user name. Error:' + args.get_message());
//}

var mainApp = angular.module('mainApp', ['ngRoute']);
var dwsApp = angular.module('dwsApp', ['ngRoute']);

mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'startController',
                templateUrl: 'index.html'
            })
        .when('/appinitdone',
            {
                controller: 'startController',
                templateUrl: 'Partials/Partial1.html'
            })
        .otherwise({ redirectTo: '/' });
});

dwsApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'dwsAppStartController',
                templateUrl: 'dwsAppPartials/dwsAppWorkspace.aspx'
                //templateUrl: 'index.html'
            })
        .when('/appinitdone',
            {
                controller: 'startController',
                templateUrl: 'Partials/Partial1.html'
            })
        .otherwise({ redirectTo: '/' });
}]);


