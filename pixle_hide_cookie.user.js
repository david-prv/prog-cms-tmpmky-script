// ==UserScript==
// @name         Auto-Hide Popup
// @namespace    https://david-dewes.de
// @version      0.1
// @description  I hate Angular
// @author       David Dewes
// @match        https://*.pixle.gg/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pixle.gg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     // inject css
    let css = ".main-cookie-alert { opacity: 0 !important; }",
        styleObj = document.createElement("style"),
        head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(styleObj);
    styleObj.type = 'text/css';
    if (styleObj.styleSheet){ styleObj.styleSheet.cssText = css; } else { styleObj.appendChild(document.createTextNode(css)); }

    // remove element entirely
    setTimeout(() => { if(document.getElementsByClassName("main-cookie-alert")[0]) document.getElementsByClassName("main-cookie-alert")[0].remove(); }, 1000);
})();
