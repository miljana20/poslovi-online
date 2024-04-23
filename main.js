$(document).ready(function(){
    $('#hamburgercic').on('click', function(){
        $('#mini-nav').fadeToggle();
    });

    $('#authh').on('click', function(){
        $('#auth-div').fadeToggle('slow');
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

    $('.front').css('transform', 'rotateY(360deg)');
    setTimeout(()=>{
        $("#preloader").fadeOut(2000, function(){
            $("#preloader").remove();
        });
    }, 1200)

    $('#to-top').click(function(){
        $('html ,body').animate({scrollTop : 0});
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('#to-top').fadeIn();
        }
        else{
            $('#to-top').fadeOut();
        }
    });
});
