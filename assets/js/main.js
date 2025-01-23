jQuery(window).load(function() {
    "use strict";
    jQuery('#preloader').delay(30).fadeOut(function() {
        jQuery('body').delay(30).css({
            'overflow': 'visible'
        });
    });
});
$(document).ready(function() {
    $('.datatable').DataTable();
    $('[data-hover="dropdown"]').dropdownHover();
    $(".form-control").focus(function() {
        $(this).closest(".form-group").addClass("focused");
    }).blur(function() {
        $(this).closest(".form-group").removeClass("focused");
    });
});
