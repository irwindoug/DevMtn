
$(document).ready(function () {
    
    var boxes = $('.boxes');
    for (var i = 0; i < 5400; i++){
        boxes.append($('<div class="box"></div>'));
    }
    
    var colors = 'red blue green yellow white';

    $('.box').on('click', function () {
        $(this).addClass(color);
    })

    $('.box').on('dblclick', function () {
        $(this).removeClass(colors);
    })

    $('#reset').on('click', function () {
        $('.box').removeClass(colors);
    })

    var color = 'white';

    $('#red').on('click', function() {
        color = 'red';
    })

    $('#blue').on('click', function(){
        color = 'blue';
    })

    $('#green').on('click', function() {
        color = 'green';
    })

    $('#yellow').on('click', function() {
        color = 'yellow';
    })

    $('#white').on('click', function() {
        color = 'white';
    })
})