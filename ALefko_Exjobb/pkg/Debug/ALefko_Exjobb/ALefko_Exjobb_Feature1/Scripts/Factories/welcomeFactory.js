mainApp.factory('welcomeFactory', function() {
    var textToReturn = "Hello World";

    var factory = {};

    factory.getText = function() {
        return textToReturn;
    };

    return factory;

});

