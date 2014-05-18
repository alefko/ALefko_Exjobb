﻿<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    
<WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" 
ID="mywebPart" Title="loc:full" >
<WebPartPages:XsltListViewWebPart ID="XsltListViewWebPart4" 
runat="server" ListUrl="_layouts/15/start.aspx#/Shared%20Documents/Forms/AllItems.aspx" IsIncluded="True" 
NoDefaultStyle="TRUE" Title="TestCustomList2" PageType="PAGE_NORMALVIEW" 
Default="False" ViewContentTypeId="0x"> 
</WebPartPages:XsltListViewWebPart>
</WebPartPages:WebPartZone>

</asp:Content>