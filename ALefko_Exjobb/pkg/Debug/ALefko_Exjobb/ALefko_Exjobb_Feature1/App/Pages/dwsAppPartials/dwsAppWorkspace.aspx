<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    

    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <!-- AngularJS -->
    <script src="../../../Scripts/angular.js"></script>
    <script src="../../../Scripts/angular-route.js"></script>

    <!-- Ajax -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>

    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../../Scripts/App_Start/App.js"></script>

    <!--AngularJS Factories -->
    <script type="text/javascript" src="../../Scripts/Factories/startFactory.js"></script>
    <script type="text/javascript" src="../../Scripts/Factories/sharePointFactory.js"></script>
    <script type="text/javascript" src="../../Scripts/Factories/loggerFactory.js"></script>

    <!-- AngularJS Controllers -->
    <script type="text/javascript" src="../../Scripts/Controllers/dwsAppControllers/dwsAppStartController.js"></script>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    <%--<WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="full" Title="loc:full" />--%>
    <label>You are on dwsAppWorkspace</label>
    <div data-ng-app="dwsApp">
        
        <%--<WebPartPages:WebPartZone runat="server" FrameType="none" ID="WebPartZone" />--%>

    <<%--div data-ng-controller="dwsAppStartController">--%>
        
        <WebPartPages:WebPartZone runat="server" FrameType="none" ID="WebPartZone1" />
        
        {{ label1 }}
        
        
    
    
        
        <%--</%--div>--%>

</div>
    
    
    <label>Label after webpartzone</label>
</asp:Content>
