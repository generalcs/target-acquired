$.get('/target-acquired/common/head.html', function (head) {
    $('head').append(head);
});

$.get('/target-acquired/common/nav.html', function (nav) {   
    $('body').prepend(nav);
});

$.get('/target-acquired/common/footer.html', function(footer) {
    $('body').append(footer);
});