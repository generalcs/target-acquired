$.get('common/head.html', function (head) {
    $('head').append(head);
});

$.get('common/nav.html', function (nav) {
    $('body').prepend(nav);
});

$.get('common/footer.html', function(footer) {
    $('body').append(footer);
});