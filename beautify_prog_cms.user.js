// ==UserScript==
// @name         Beautify Prog CMS
// @namespace    https://david-dewes.de/
// @version      2.3
// @description  remove annoying components, add problem types
// @author       David Dewes
// @match        https://cms.sic.saarland/prog1_21/students/view
// @icon         https://www.google.com/s2/favicons?domain=sic.saarland
// @grant        none
// ==/UserScript==

(function() {

    const YOUR_TIME_SLOT = "Slot 14:00";
    const MIDTERM_PROBLEMS = {
        "Problem 1": "Inversion",
        "Problem 2": "Fibonacci",
        "Problem 3": "Reverse",
        "Problem 4": "Init",
        "Problem 5": "Decimal",
        "Problem 6": "Prime",
        "Problem 7": "Insertionsort",
        "Problem 8": "Prefix",
        "Problem 9": "Deeptree",
        "Problem 10": "Linearization",
        "Problem 11": "Typing/Evaluation Rules"
    };

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
       if (cnode.childNodes[1].innerHTML.indexOf("Open") !== -1 &&
           cnode.childNodes[3].innerHTML.indexOf(YOUR_TIME_SLOT) == -1 &&
           cnode.childNodes[3].innerHTML.indexOf("All Slots") == -1) cnode.setAttribute('style', 'display:none!important;');
    });

    // MIDTERM WISE21/22 PROBLEMS //

    let m_table = document.getElementById("testing_10").childNodes[0].childNodes[0];
    let m_problem_values = Object.values(MIDTERM_PROBLEMS);

    for(let i = 0; i <= m_problem_values.length; i++) {
        m_table.innerHTML = m_table.innerHTML.replace(`Problem ${i.toString()}`, `Problem ${i.toString()} (${m_problem_values[i-1]})`);
    }

})();
