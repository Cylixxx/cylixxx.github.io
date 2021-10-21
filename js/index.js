/*
  Author: 		  Ryan Gilchrist
  File name: 		index.js
  Date Created:	10/08/2021
  Date Updated: 10/21/2021
  Version: 		  0.5

  Copyright: 
      *********************************************************************** 
      ***********************************************************************
      ***********************************************************************

  Description:
      JavaScript required for index.html.
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

//Globals//

const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

// const side_bar = document.getElementById("side_bar");
const home_menu = document.getElementById("home_menu");
const about_menu = document.getElementById("about_menu");
const contact_menu = document.getElementById("contact_menu");


function header_navigation() {
  //Header links
  document.getElementById("home_nav").onclick = function () {
    home.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  document.getElementById("about_nav").onclick = function () {
    about.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  document.getElementById("project_nav").onclick = function () {
    projects.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  document.getElementById("contact_nav").onclick = function () {
    contact.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  document.getElementById("next_section").onclick = function () {
    about.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  document.getElementById("goHome").onclick = function () {
    home.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
function menu_navigation() {
  //Menu links
  home_menu.onclick = function () {
    side_bar.style.display = 'none';
    home.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  about_menu.onclick = function () {
    side_bar.style.display = 'none';
    about.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  contact_menu.onclick = function () {
    side_bar.style.display = 'none';
    contact.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
header_navigation();
menu_navigation();
