/* JS FOR ALL PAGES */

/* Javascript for the accordion widget (used on every page except the home page).  */
/* This section of javascript creates a function which selects all the elements which have the id equal to 'accordion'. It then applies the jquery accordion widget to these elements. */
$( function() {
    $( "#accordion" ).accordion();
});




/* JS for dropdown menu */
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); /* This gets the element "myDropdown" and adds the class "show" from my css. This then gives it new properties, such as displaying the drop down menu. */
}

/* This then closes the menu if the mouse is clicked outside of the drop down box */
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* JS FOR MATERAL PAGE */

/* Drag/Drop js */
/* This section of javascript creates a function which selects the #draggable and #droppable id's and then applies the correct jquery ui widgets respectively. */
$( function() {
    $( "#draggable").draggable();
    $( "#droppable").droppable({
        drop: function( event, ui) {
            $( this )
            .addClass( "ui-state-highlight" )
            .find( "p")
            .html ( "Bangladesh gained independence on the 26th of March 1971" );
        }
    });
});







/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* JS FOR PATERNAL PAGE */

/* The dialog box code originallly came with a different format, which meant I had to edit the code below. I had to change the id to class, so that I could have multiple dialog boxes, instead of one. */
/* This section of javascript creates a function which selects elements with class equal to 'dialog'. It then applies the correct jquery ui widget. */
/* Dialog box js */
$( function() {
    $( ".dialog" ).dialog(); 
} );









/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* JS FOR MY PARENTS PAGE */

/* Sortable widget js */
/* This section of javascript creates a function which selects elements with id equal to 'sortable'. It then applies the correct jquery ui widget, both sortable and siableSelection. */
$ (function () {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});










/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* JS FOR ME PAGE */

/* Dialog box js (Note: I did not have to write this code below as it is already above for the paternal page. However, I have included it, as it will help keep my rest.js page organsied with every type of javascript on each page. As well as this, it will enable other viewers of my code to quickly see which types of js I have on certain pages) */
/* This section of javascript creates a function which selects elements with class equal to 'dialog'. It then applies the correct jquery ui widget. */
$( function() {
    $( ".dialog" ).dialog(); 
} );
