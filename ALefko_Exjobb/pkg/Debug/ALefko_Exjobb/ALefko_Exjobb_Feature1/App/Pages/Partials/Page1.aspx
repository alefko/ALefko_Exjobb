<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../../../Scripts/jquery-1.9.1.min.js"> </script>
    <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="/_layouts/15/SP.Runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/SP.js"></script>
    <script type="text/javascript" src="/_layouts/15/SP.UI.Dialog.js"></script>

    <meta name="WebPartPageExpansion" content="full" />

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../../../Content/App.css" />
    
     <!-- AngularJS -->
    <script src="../../../Scripts/angular.js"></script>
    <script src="../../../Scripts/angular-route.js"></script>
    
    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../../Scripts/App_Start/App.js"></script>
    
    <!--AngularJS Factories -->
    <script type="text/javascript" src="../../Scripts/Factories/startFactory.js"></script>
    <script type="text/javascript" src="../../Scripts/Factories/sharePointFactory.js"></script>
    <script type="text/javascript" src="../../Scripts/Factories/loggerFactory.js"></script>
    
    <!-- AngularJS Controllers -->
    <script type="text/javascript" src="../../Scripts/Controllers/startController.js"></script>
    
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    
    <%--<WebPartPages:WebPartZone runat="server" FrameType="none" ID="WebPartZone1" />--%>
     
</asp:Content>
