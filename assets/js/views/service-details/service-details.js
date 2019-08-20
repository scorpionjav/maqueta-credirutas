$(document).ready(function () {

    $('#back').click(function () {
        closeVeloModal(veloModal);
    });

});

/* Input - Date */
var now = new Date();
var today = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
$('#date').val(today);

/* Rating */
var svg = $('.svgWheel');
var initialRating = 0;

function setRating(value) {
    svg.each(function () {
        if ($(this).data('rating') <= value) {
            return $(this).css('fill', 'green');
        } else {
            return $(this).css('fill', 'gray');
        }
    });
};

svg.click(function () {
    initialRating = $(this).data('rating');
    setRating($(this).data('rating'));
});

svg.mouseover(function () {
    setRating($(this).data('rating'));
});

svg.mouseout(function () {
    setRating(initialRating);
});
