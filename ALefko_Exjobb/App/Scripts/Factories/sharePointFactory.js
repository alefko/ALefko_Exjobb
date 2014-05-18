mainApp.factory('sharePointFactory', function (loggerFactory) {

    

    var factory = {};

    var hostWebUrl;
    var appWebUrl;
    var context;
    var newSubsite;

    factory.GetQueryString = function getQueryString(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    try {
        hostWebUrl = factory.GetQueryString("SPHostUrl");
        appWebUrl = factory.GetQueryString("SPAppWebUrl");

        var layoutsRoot = hostWebUrl + '/_layouts/15/';

    }
    catch (ex) {
        alert("message" + ex.message);
    }

    factory.createSubsite = function (siteDescription, siteTitle, siteUrl) {

        var dfd = $.Deferred();

        context = new SP.ClientContext(appWebUrl);

        var hostContext = new SP.AppContextSite(context, hostWebUrl);

        var webCreateInfo = new SP.WebCreationInformation();
        //set values
        webCreateInfo.set_description(siteDescription);
        webCreateInfo.set_language(1033);
        webCreateInfo.set_title(siteTitle);
        webCreateInfo.set_url(siteUrl);
        webCreateInfo.set_useSamePermissionsAsParentSite(true);
        webCreateInfo.set_webTemplate("STS#0");

        this.web = hostContext.get_web();

        newSubsite = this.web.get_webs().add(webCreateInfo);
        context.load(newSubsite);

        context.executeQueryAsync(
                Function.createDelegate(this, successHandler), Function.createDelegate(this, errorHandler));


        function successHandler() {
            //alert("subsite created successfully");
            loggerFactory.log('subsite created successfully');
            dfd.resolve();
        }

        function errorHandler(sender, args) {
            //alert("Could not complete cross-domain call: " + args.get_message());
            loggerFactory.log("Could not complete cross-domain call: " + args.get_message());
            dfd.reject();
        }

        return dfd.promise();
    }

    return factory;
});