/**
 * Created by Паша Рощина on 23.01.2016.
 */
$(document).ready(function(){
    $('.button2').click(function(){           //+++
    var text=$(this).parent().find('.counter').val();
    text=parseInt(text)+1;
    $(this).parent().find('.counter').val(text);
        $(this).parent().find('.button1').addClass('nextstyle');
});
    $('.button1').click(function() {          //---
        var text = $(this).parent().find('.counter').val();
        if (text <= 1) {
            text = 1;
        } else{
            text = parseInt(text) - 1;
        }
        $(this).parent().find('.counter').val(text);
        if(text == 1){
            $(this).parent().find('.button1').removeClass('nextstyle');
        }
    });

    $(".button3").click(function() {         //delete
        $(this).parent().hide("fast");
    });
    $('.buttonfirst').click(function(){
        
    });
});