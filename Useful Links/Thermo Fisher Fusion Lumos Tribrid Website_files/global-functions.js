window.performance&&window.performance.mark&&window.performance.mark("global-functions.js:blockBegin");function getJSInclude(c,b){var a=document.createElement("script");a.type="text/javascript";a.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){tb_show(null,b,null)}};a.onload=function(){tb_show(null,b,null)};a.src=c;document.getElementsByTagName("body")[0].appendChild(a)}function redirectIfUserUnidentified(isModal,pageName,returnURL,validationFunction,useTemplate,messageType,linkObjectForPopover,returnURLIsFunctionCall,endpointType,forceCheck){if(_lt.user.isMasterUser||forceCheck){if(pageName=="GeneArt"){unsetCookie("CK_GA_USER_INFO")}if(typeof validationFunction!="undefined"&&validationFunction!=false&&validationFunction!=""){var result=eval(validationFunction);if(result!=false){openUserIdentificationOverlay(isModal,pageName,returnURL,messageType,useTemplate,linkObjectForPopover,returnURLIsFunctionCall,endpointType)}}else{openUserIdentificationOverlay(isModal,pageName,returnURL,messageType,useTemplate,linkObjectForPopover,returnURLIsFunctionCall,endpointType)}return false}else{if(returnURLIsFunctionCall==true){eval(returnURL)}else{return true}}return false}function openUserIdentificationOverlay(i,k,a,f,j,c,l,m){if(typeof k=="undefined"||k=="undefined"){k=""}k=encodeURIComponent(k);if(i==true){if(typeof c=="object"){var h=$(localizedMasterUserPopoverSettings.content_template);if(j=="ordering"){var e=$(localizedMasterUserPopoverSettings.content_ordering);if(!!_lt&&!!_lt.user&&_lt.user.userlogin=="004321519_us"){var g=e.text();if(g.indexOf(".")!=-1){g=g.split(".")[0];if(!!g){g+="."}e.html(g)}}$(".content_fill",h).replaceWith(e)}$(".content_fill a.link_search_tool",h).attr("href",environmentURL.COMERGENTSERVERSECURE+localizedLink.GUEST_USER_SEARCH_TOOL);$(".return-url",h).val(a);if(l==true){$(".return-url-is-function-call",h).val("true")}else{$(".return-url-is-function-call",h).val("false")}var n;switch(m){case"unique-express":n=localizedLink.GUEST_USER_AJAX_AUTH_UNIQUE_EXPRESS;break;case"master":default:n=localizedLink.GUEST_USER_AJAX_AUTH}var b=location.protocol+"//"+environmentURL.COMERGENTSERVER+n+"&identifyUser=true&isModal=true&fromPage="+k;var d=f;if(typeof d!="undefined"&&d!=""&&d!="undefined"){b+="&messageTypeAndTab="+encodeURIComponent(d)}$("form",h).attr("action",b);c.addClass("master-user-popover-assigned master-user-popover-open").popover({title:localizedMasterUserPopoverSettings.title,content:h.html(),html:localizedMasterUserPopoverSettings.html,trigger:localizedMasterUserPopoverSettings.trigger,template:localizedMasterUserPopoverSettings.template}).popover("show")}}else{var b=location.protocol+"//"+environmentURL.COMERGENTSERVER+localizedLink.GUEST_USER_AUTH_REDIRECT+"&isModal=false&linkName="+k+"&fromPage="+k+"&returnURL="+encodeURIComponent(a);var d=f;if(typeof d!="undefined"&&d!=""&&d!="undefined"){b+="&messageTypeAndTab="+encodeURIComponent(d)}window.location=b}}window.performance&&window.performance.mark&&window.performance.mark("global-functions.js:blockEnd");