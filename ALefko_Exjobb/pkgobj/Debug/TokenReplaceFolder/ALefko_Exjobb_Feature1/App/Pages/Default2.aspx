<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    
    
    <%--<script type="text/javascript" src="../../Scripts/jquery-1.9.1.min.js"> </script>
    <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="/_layouts/15/SP.Runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/SP.js"></script>--%>
    <script type="text/javascript" src="/_layouts/15/SP.UI.Dialog.js"></script>

    <meta name="WebPartPageExpansion" content="full" />

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../../Content/App.css" />
    
     <!-- AngularJS -->
    <script type="text/javascript" src="../../Scripts/jquery-1.9.1.min.js"> </script>
    <script src="../../Scripts/angular.js"></script>
    <script src="../../Scripts/angular-route.js"></script>
    
    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../Scripts/App_Start/App.js"></script>
    
    <!--AngularJS Factories -->
    <script type="text/javascript" src="../Scripts/Factories/startFactory.js"></script>
    <script type="text/javascript" src="../Scripts/Factories/sharePointFactory.js"></script>
    <script type="text/javascript" src="../Scripts/Factories/loggerFactory.js"></script>
    
    <!-- AngularJS Controllers -->
    <script type="text/javascript" src="../Scripts/Controllers/startController.js"></script>
    
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Page Title
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <%--<div>
        <p id="message">
            <!-- The following content will be replaced with the user name when you run the app - see App.js -->
            initializing...
        </p>
    </div>--%>
    
    <WebPartPages:WebPartZone runat="server" FrameType="none" ID="WebPartZone" />

    <%--<div data-ng-app="mainApp">
       
        <div data-ng-view=""></div>

    </div>--%>

</asp:Content>
