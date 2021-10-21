/*
  Author: 		  Ryan Gilchrist
  File name: 		main.js
  Date Created:	10/21/2021
  Date Updated: 10/21/2021
  Version: 		  0.1

  Copyright:
      ***********************************************************************
      ***********************************************************************
      ***********************************************************************

  Description:
      JavaScript required accross all pages.
*/
//Globals
const side_bar = document.getElementById("side_bar");

//Open/Close Side Bar
function side_bar_menu() {
    document.getElementById("open_icon").onclick = function () {
        side_bar.style.display = 'inline-block';
    }
    document.getElementById("close_icon").onclick = function () {
        side_bar.style.display = 'none';
    }
    document.getElementById("projects_menu").onclick = function () {
        // document.getElementById("side_bar").style.display = 'none';
        var x = document.getElementById("projects_more");
        if (x.style.display === "none") {
            x.style.display = "inline-block";
        } else {
            x.style.display = "none";
        }
        // projects.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

side_bar_menu();