$(document).ready(function () {
    var tweetHeight = $('.tweet-compose').height();

    $('#tweet-content').on('click', function () {
        $('#tweet-controls').show();

        if ($('.tweet-compose').height() < (2 * tweetHeight)) {
            $('.tweet-compose').height(function (i, h) {
                return (h * 2);
            });
        }

        var counter = $("#char-count");
        $('#tweet-content').keypress(function () {
            counter--;
            $("#char-counter").text(counter);
        });
    });

    $('#tweet-submit').on('click', function () {
        $.ajax({
            type: "POST",
            url: "Whatever",
            data: JSON.stringify({}),
            success: function (data) {
                //New Tweet here
                //Tweet box .val('');
            }
        })
    })
})