var counter = 0;
var seconds = 0;
$('#counter span').html(counter);
$('#timer span').html(seconds);

$('#start').hide();
$('#bunny').hide();
$('#endScreen').hide();

$('#start-Game').on("mouseover", function() {
    $(this).hide();

    var randWidth = Math.ceil(Math.random() * 350);
    var randHeight = Math.ceil(Math.random() * 350);

    $('#bunny').show();
    $('#bunny').css('top', randHeight);
    $('#bunny').css('left', randWidth);

    window.setInterval(function() {
        seconds = seconds + 1;
        $('#timer span').html(seconds);
    }, 1000);
});

$('#start').on("mouseover", function() {

    var randWidth = Math.ceil(Math.random() * 350);
    var randHeight = Math.ceil(Math.random() * 350);

    $('#bunny').show();
    $('#bunny').css('top', randHeight);
    $('#bunny').css('left', randWidth);
    $(this).hide();
});

$('#bunny').on("mouseover", function() {
    counter = counter + 1;
    $('#counter span').html(counter);

    if (counter == 10) {
        $('#endScreen').show();
        $('#endCount').html(counter);
        $('#endSeconds').html(seconds);
    }

    $(this).hide();
    $('#start').show();

});
