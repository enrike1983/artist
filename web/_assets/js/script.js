var inView = require('in-view');

inView('.fadeable').on('enter', function(el) {
    el.classList.add('in-view');
});

inView('.fadeable-later').on('enter', function(el) {
    el.classList.add('in-view');
});

inView('.fadeable-right').on('enter', function(el) {
    el.classList.add('in-view');
});

jQuery('.info-container').mouseenter(function() {
    jQuery(this).find('.info-description').addClass('in-view')
}).mouseleave(function() {
    jQuery(this).find('.info-description').removeClass('in-view')
});

jQuery( '.swipebox' ).swipebox();