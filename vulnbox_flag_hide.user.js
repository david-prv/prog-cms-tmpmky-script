// ==UserScript==
// @name         Hide FLAGS during presentation (vulnbox)
// @namespace    https://david-dewes.de/
// @version      0.1
// @description  anti cheat plugin
// @author       David Dewes
// @match        http://217.160.50.52/admin/home/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=50.52
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // inject css
    let css = ".blurred { user-select:none; color: transparent; text-shadow: 0 0 5px rgb(154 154 154 / 70%); -webkit-transition: text-shadow 0s; -moz-transition: text-shadow 0s; }",
        styleObj = document.createElement("style"),
        head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(styleObj);
    styleObj.type = 'text/css';
    if (styleObj.styleSheet){ styleObj.styleSheet.cssText = css; } else { styleObj.appendChild(document.createTextNode(css)); }

    // hide flag
    let flag = document.getElementById("paste-card-62d471597ccf6");
    flag.classList.add("blurred");
})();
