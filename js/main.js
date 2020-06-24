$(document).ready(function() {
    $('.menu__responsive').click(function(e) {
        $('.menu').prepend('<span class="menu__close" onclick="transformMenu()"><i class="fas fa-times"></i></span>');
        $('.menu').css('display', 'grid');
        $('.menu').css('transform', 'translateX(0)');
    });
});