// ==UserScript==
// @name         Hide sensitive data
// @namespace    https://david-dewes.de/
// @version      0.1
// @description  hide sensible data in SIC cms
// @author       David Dewes
// @match        https://cms.sic.saarland/*/students/view
// @icon         none
// @grant        none
// ==/UserScript==

(function() {

    const BLUR_GLOBAL = true;

    let css = ".blurred { color: transparent; text-shadow: 0 0 5px rgb(154 154 154 / 50%); -webkit-transition: text-shadow 0s; -moz-transition: text-shadow 0s; } .blurred:hover {color: inherit; text-shadow: 0 0 0 rgba(255,255,255,1); -webkit-transition: text-shadow 0.1s; -moz-transition: text-shadow 0.1s;} ",
        styleObj = document.createElement("style"),
        head = document.head || document.getElementsByTagName('head')[0],
        matriculation,
        fullname;
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

    fullname = cleanNodes[0].innerHTML;
    matriculation = cleanNodes[2].innerHTML;

    /* Blur */
    Array.prototype.forEach.call(cleanNodes, function(cnode) {
       cnode.classList.add("blurred");
    });

    // global
    if(BLUR_GLOBAL) document.body.innerHTML = document.body.innerHTML.replaceAll(matriculation, "<span class='blurred'>" + matriculation + "</span>").replaceAll(fullname, "<span class='blurred'>" + fullname + "</span>");

})();
