 ////////////////////////////////
 // JavaScript for Posts page //
 ////////////////////////////////

$(function() {
    // Executed when js-menu js clicked
    $('.js-menu-icon').click(function() {
        // $(this) : Self element, namenly div.js-menu-icon
        // next() : Next to div.js-menu-icon, namely div.menu
        $(this).next().toggle();

    });
});