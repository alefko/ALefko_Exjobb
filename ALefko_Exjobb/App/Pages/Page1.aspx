<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    <h1>XsltListView web part:</h1>
    <br />   
    <%--<WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="WebPartZone3">
        <%--<WebPartPages:XsltListViewWebPart ID="XsltListViewWebPart_AppWeb3" 
            runat="server" ListUrl="Lists/EXJDocuments" IsIncluded="True" 
            NoDefaultStyle="TRUE" Title="XsltListView web part" PageType="PAGE_NORMALVIEW" 
            Default="False" ViewContentTypeId="0x"> 
        </WebPartPages:XsltListViewWebPart> --%> 
    <%--</WebPartPages:WebPartZone>--%>--%>
    <%--<asp:Label runat="server">Test Label</asp:Label>--%>
    <label>Hello World</label>
</asp:Content>
