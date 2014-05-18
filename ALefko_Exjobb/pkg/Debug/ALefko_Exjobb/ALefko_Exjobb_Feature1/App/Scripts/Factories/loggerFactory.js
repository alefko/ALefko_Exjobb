'use strict';

mainApp.factory('loggerFactory', function () {

    var factory = {};

    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth() + 1) + "/"
                    + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":"
                    + currentdate.getSeconds();

    factory.log = function(message) {
        console.log('Alefko_Exjobb: ' + datetime + ' ' + message);
    }

    return factory;
});