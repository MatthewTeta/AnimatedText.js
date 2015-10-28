$(document).ready(function() {
    $('.animate').addClass('done');
    
    animatePage();
});

function animatePage() {
    var headerText = $('.animate#header').html();
    var headerAnimateInterval = 50;
    var subText = $('.animate#sub-text').html();
    var subTextAnimateInterval = 50;
    
    $('div.centered').show();
    
    var nextDelay = animateText(headerText, headerAnimateInterval, 'div.section:first .animate#header', 100, 100);
    animateText(subText, subTextAnimateInterval, 'div.section:first .animate#sub-text', nextDelay, 100);
}
