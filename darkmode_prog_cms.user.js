// ==UserScript==
// @name         DarkMode Prog CMS
// @namespace    https://david-dewes.de/
// @version      0.1
// @description  dark is always better, change my mind
// @author       David Dewes
// @match        https://cms.sic.saarland/prog1_21/students/view
// @icon         https://www.google.com/s2/favicons?domain=sic.saarland
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let body = document.body;
    body.setAttribute("style", "background-color:#0d1117!important;color:#c9d1d9!important;padding-top:2%;");
    body.innerHTML += "<style>table.table-surrounded tr td:first-child, table.table-surrounded tr th:first-child {border-left:none!important;} .bs-docs-sidenav > li > a {border: none!important;} .nav-list>li>a, .nav-list .nav-header {text-shadow:none!important;} .table th, .table td {border-top:1px solid black!important;} .table-bordered {border:none!important;}</style>"
    let tables = document.getElementsByClassName("table table-striped");
    Array.prototype.forEach.call(tables, function(table) {
        let tbody = table.childNodes[0];
        let tablerows = tbody.childNodes;
        let eveness = 0;
        for(let i = 0; i<tablerows.length; i++) {
            eveness += 1;
            let row = tablerows[i];
            if(eveness % 2 > 0) {
                let tr = row.childNodes;
                for(let j = 0; j<tr.length; j++) {
                    let crow = tr[j];
                    crow.setAttribute("style", "background-color:#202020!important;")
                }
            }
        };
    });
    let spy = document.getElementById("scrollspy");
    spy.setAttribute("style", "background-color:transparent!important;")
})();
