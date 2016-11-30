var inView = require('in-view');

inView('.fadeable').on('enter', function(el) {
    el.classList.add('in-view');
});

inView('.fadeable-later').on('enter', function(el) {
    el.classList.add('in-view');
});