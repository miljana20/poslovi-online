$(document).ready(function(){
    $('#hamburgercic').on('click', function(){
        $('#mini-nav').toggle();
    });
    $('li.category').mouseenter(function(){
        var targetDivId = $(this).data('target');
        $('.cat-div').css('display', 'none');
        $('#' + targetDivId).css('display', 'flex');
    });

    $('.cat-div').mouseleave(function(){
        $(this).css('display', 'none');
    });
    
    $('#mp').on('input', function() {
        var value = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min')) * 100;
        $(this).css('--value', value + '%');
    });

});