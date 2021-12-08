// ==UserScript==
// @name         Beautify Prog CMS
// @namespace    https://david-dewes.de/
// @version      2.1
// @description  remove annoying components
// @author       David Dewes
// @match        https://cms.sic.saarland/prog1_21/students/view
// @icon         https://www.google.com/s2/favicons?domain=sic.saarland
// @grant        none
// ==/UserScript==

(function() {

    const YOUR_TIME_SLOT = "Slot 14:00";

    /* get clean nodes */
    let nodes = document.getElementsByClassName("table-submissions")[0].childNodes[1].childNodes;
    let cleanNodes = [];
    Array.prototype.forEach.call(nodes, function(node) {
        if (node.nodeName == 'TR') {
           cleanNodes.push(node);
        }
    });

    Array.prototype.forEach.call(cleanNodes, function(cnode) {
        /* Remove closed submissions */
       if (cnode.childNodes[1].innerHTML.indexOf("Closed") !== -1) cnode.setAttribute('style', 'display:none!important;');
        /* Remove open submissions that do not belong to you */
       if (cnode.childNodes[1].innerHTML.indexOf("Open") !== -1 && cnode.childNodes[3].innerHTML.indexOf(YOUR_TIME_SLOT) == -1) cnode.setAttribute('style', 'display:none!important;');
    });

})();
