// ==UserScript==
// @name         Hide sensitive data
// @namespace    https://david-dewes.de/
// @version      0.1
// @description  hide sensitive data in SIC cms
// @author       David Dewes
// @match        https://cms.sic.saarland/prog1_21/students/view
// @icon         https://www.google.com/s2/favicons?domain=sic.saarland
// @grant        none
// ==/UserScript==

(function() {

    let css = ".blurred { color: transparent; text-shadow: 0 0 5px rgb(154 154 154 / 50%); -webkit-transition: text-shadow 0.1s; -moz-transition: text-shadow 0.1s; } .blurred:hover {color: transparent; text-shadow: 0 0 0 rgba(255,255,255,1); -webkit-transition: text-shadow 0.1s; -moz-transition: text-shadow 0.1s;} ",
        styleObj = document.createElement("style"),
        head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(styleObj);
    styleObj.type = 'text/css';
    if (styleObj.styleSheet){ styleObj.styleSheet.cssText = css; } else { styleObj.appendChild(document.createTextNode(css)); }

    /* fetch clean nodes */
    let nodes = document.getElementsByClassName("dl-horizontal")[0].childNodes;
    let cleanNodes = [];
    Array.prototype.forEach.call(nodes, function(node) {
        if (node.nodeName == 'DD') {
           cleanNodes.push(node);
        }
    });

    /* Blur */
    Array.prototype.forEach.call(cleanNodes, function(cnode) {
       cnode.classList.add("blurred");
    });

})();
