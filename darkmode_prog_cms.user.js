// ==UserScript==
// @name         DarkMode Prog CMS
// @namespace    https://david-dewes.de/
// @version      0.1
// @description  dark is always better, change my mind
// @author       David Dewes
// @match        https://cms.sic.saarland/prog1_21/*
// @icon         https://www.google.com/s2/favicons?domain=sic.saarland
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /* Add some global styles */
    let body = document.body;
    body.setAttribute("style", "background-color:#0d1117!important;color:#c9d1d9!important;padding-top:2%;");
    body.innerHTML += "<style>a:hover {background-color:transparent!important;} .progress {background:none!important;background-color:#c00000!important;} div.accordion-body.in {border-top:1px solid black!important;} div.accordion-body .table th, div.accordion-body .table td {border-bottom:none!important;} .accordion-group {border:1px solid black!important;} .modal-header .close {color:white!important;} .modal-footer {background-color:black!important;} .modal {background-color:black!important;border:1px solid white!important;} table.table-surrounded tr td:first-child, table.table-surrounded tr th:first-child {border-left:none!important;} .bs-docs-sidenav > li > a {border: none!important;} .nav-list>li>a, .nav-list .nav-header {text-shadow:none!important;} .table th, .table td {border-top:1px solid black!important;} .table-bordered {border:none!important;}</style>"

    /* Add style to certain table rows */
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

    /* Add style to certain accordion rows */
    let accordions = document.getElementsByClassName("accordion-group");
    Array.prototype.forEach.call(accordions, function(acc) {
        let collapse = acc.childNodes[3];
        let table = collapse.childNodes[1];
        let tbody = table.childNodes[1];
        let rows = tbody.childNodes;
        /* clean up */
        let clean_rows = [];
        for(let i=0; i<rows.length; i++) {
            let row = rows[i];
            if (row.nodeName == 'TR') clean_rows.push(row);
        }
        /* Continue */
        let eveness = 0;
        for(let j=0;j<clean_rows.length; j++) {
            eveness += 1;
            if(eveness % 2 > 0) {
                clean_rows[j].childNodes[1].setAttribute("style", "background-color:#202020!important;");
                clean_rows[j].childNodes[3].setAttribute("style", "background-color:#202020!important;");
                clean_rows[j].childNodes[5].setAttribute("style", "background-color:#202020!important;");
                clean_rows[j].childNodes[7].setAttribute("style", "background-color:#202020!important;");
            }
        }
    });

    /* Add style to spy */
    let spy = document.getElementById("scrollspy");
    if(spy) spy.setAttribute("style", "background-color:transparent!important;")
})();
