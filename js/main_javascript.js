/*
  Author: 		  Ryan Gilchrist
  File name: 		main_javascript.js
  Date Created:	10/08/2021
  Date Updated: 10/10/2021
  Version: 		  0.1

  Copyright: 
      *********************************************************************** 
      ***********************************************************************
      ***********************************************************************

  Description:
      JavaScript used for index_home.html.
*/

// function function1() {
//     $(document).ready(function() {
//         $(".home_title").animate({
//             left: '250px',
//             opacity: '0.5',
//             height: '150px',
//             width: '150px'
//         });
//     })
// }

function navigation() {
  document.getElementById("home_page").onclick = function () {
    document.getElementById("navigation_bar").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  document.getElementById("about_page").onclick = function () {
    document.getElementById("about").scrollIntoView({ behavior: "smooth", block: "center" });
  }
  document.getElementById("project_page").onclick = function () {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "center" });
  }
  document.getElementById("contact_page").onclick = function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "center" });
  }
  document.getElementById("next_section").onclick = function () {
    document.getElementById("about").scrollIntoView({ behavior: "smooth", block: "center" });
  }
  document.getElementById("goHome").onclick = function () {
    document.getElementById("navigation_bar").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
navigation();
// function1();