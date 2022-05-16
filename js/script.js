$(document).ready(function () {
   $(window).on('scroll', function () {
       if($(window).scrollTop() !== 0) {
           $('.header').addClass('active');
       }
       else {
           $('.header').removeClass('active');
       }
   }).trigger('scroll');

    $('.search_panel form input').css('opacity' '0');

$('.search_panel form button').on('click', function () {
    $('.search_panel form input').toggle();
});





















});
