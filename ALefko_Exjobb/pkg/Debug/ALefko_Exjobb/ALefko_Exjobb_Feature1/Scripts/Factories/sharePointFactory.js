mainApp.factory('sharePointFactory', function () {

    var factory = {};

    factory.GetQueryString = function getQueryString(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    factory.createSubsite = function() {
        var hostWebUrl;
        var appWebUrl;
        var context;
        var newSubsite;

        try {
            hostWebUrl = factory.GetQueryString("SPHostUrl");
            appWebUrl = factory.GetQueryString("SPAppWebUrl");

            var layoutsRoot = hostWebUrl + '/_layouts/15/';

            $.getScript(layoutsRoot + "SP.Runtime.js", function () {

                $.getScript(layoutsRoot + "SP.js", CreateSubsite);
            });

        }
        catch (ex) {
            alert("message" + ex.message);
        }
        


        //function GetQueryString(name) {
        //    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        //    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        //    results = regex.exec(location.search);
        //    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        //}

        // Function to create subsite

        function CreateSubsite() {

            context = new SP.ClientContext(appWebUrl);

            var hostContext = new SP.AppContextSite(context, hostWebUrl);

            var webCreateInfo = new SP.WebCreationInformation();
            //set values
            webCreateInfo.set_description("New Subsite Created");
            webCreateInfo.set_language(1033);
            webCreateInfo.set_title("NewSubSite");
            webCreateInfo.set_url("SubsiteURL");
            webCreateInfo.set_useSamePermissionsAsParentSite(true);
            webCreateInfo.set_webTemplate("STS#0");

            this.web = hostContext.get_web();

            newSubsite = this.web.get_webs().add(webCreateInfo);
            context.load(newSubsite);

            context.executeQueryAsync(
                    Function.createDelegate(this, successHandler), Function.createDelegate(this, errorHandler));
        }

        function successHandler() {
            alert("subsite created successfully");
        }

        function errorHandler(sender, args) {
            alert("Could not complete cross-domain call: " + args.get_message());
        }
    }

    return factory;
});