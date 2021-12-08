// ==UserScript==
// @name         Prog CMS : Remove Closed Submissions
// @namespace    https://david-dewes.de/
// @version      0.1
// @description  remove annoying closed submissions
// @author       David Dewes
// @match        https://cms.sic.saarland/prog1_21/students/view
// @icon         https://www.google.com/s2/favicons?domain=sic.saarland
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    let nodes = document.getElementsByClassName("table-submissions")[0].childNodes[1].childNodes;
    let cleanNodes = [];
    Array.prototype.forEach.call(nodes, function(node) {
        if (node.nodeName == 'TR') {
           cleanNodes.push(node);
        }
    });
    Array.prototype.forEach.call(cleanNodes, function(cnode) {
       if (cnode.childNodes[1].innerHTML.indexOf("Closed") !== -1) cnode.setAttribute('style', 'display:none!important;');
    });
})();
