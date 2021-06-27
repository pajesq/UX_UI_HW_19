$(".donateBOX").hover(function(){
  $(this).css("background-color", '#' + "A6C587");
  }, function(){
  $(this).css("background-color", '#' + "FF8F42");
});

$(".followIcons img").hover(function()
{
  $(this).animate({"padding": "10px"}, "fast");
},
function()
{
   $(this).animate({"padding": "-10px"}, "fast");
}
);

$("#cityBOX p").hover(function(){
  $(this).css("background-color", '#' + "A6C587");
  }, function(){
  $(this).css("background-color", 'rgba' + "(255,255,255,0.8)");
});




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunctionABOUT() {
  document.getElementById("myDropdownABOUT").classList.toggle("showABOUT");
}

function myFunctionHR() {
  document.getElementById("myDropdownHR").classList.toggle("showHR");
}

function myFunctionNE() {
  document.getElementById("myDropdownNE").classList.toggle("showNE");
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
  if (!event.target.matches('.dropbtnABOUT')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentABOUT");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showABOUT')) {
        openDropdown.classList.remove('showABOUT');
      }
    }
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtnHR')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentHR");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showHR')) {
        openDropdown.classList.remove('showHR');
      }
    }
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtnNE')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentNE");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showNE')) {
        openDropdown.classList.remove('showNE');
      }
    }
  }
}