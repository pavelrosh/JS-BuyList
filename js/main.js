/**
 * Created by Паша Рощина on 23.01.2016.
 */
$(document).ready(function(){
    var nameproduct;
    var LIST=$('.tableleft');
    var ITEM_TEMPLATE=$('.new_product_panel').html();
    var LEFT_ITEMS=$('.one_article').html();
    var LEFT_LIST=$('.leftStat');

    $('#inp1').click(function(){
        $('#inp1').val("");
    })
    $('.buttonfirst').click(function(){
        nameproduct=$('#inp1').val();
        addEl(nameproduct);
    });
function addEl(nameproduct) {
var node=$(ITEM_TEMPLATE);
var rightnode=$(LEFT_ITEMS);
node.find('.inp2').val(nameproduct);
    rightnode.find('.text-node').text(nameproduct);
LIST.append(node);
LEFT_LIST.append(rightnode);
//----------------------------------------------------------------------

    node.find('.button3').click(function(){  //remove button
        $(this).parent().hide();
        var key=$(this).parent().find('.inp2').val();
        $('.article:contains("' + key + '")').hide();
    })
//-------------------------------------------------------------------------------------------------
    node.find('.button2').click(function () {           //+++
        var text = $(this).parent().find('.counter').val();
        text = parseInt(text) + 1;
        $(this).parent().find('.counter').val(text);
        $(this).parent().find('.button1').addClass('nextstyle');
        var key=$(this).parent().find('.inp2').val();
       $('.article:contains("'+key+'")').find('.nu').find('.number').text(text);
    })
    //---------------------------------------------------------------------------------------------
node.find('.button1').click(function(){       //---
    var text = $(this).parent().find('.counter').val();
    text = parseInt(text) - 1;
    if (text < 1) {
        text = 1;
    }
    $(this).parent().find('.counter').val(text);
    if (text == 1) {
        $(this).parent().find('.button1').removeClass('nextstyle');
    }
    var txt = $(this).parent().find('.inp2').val();
    $('.article:contains("' + txt + '")').find('.nu').find('.number').text(text);
})
    //-----------------------------------------------------------------------------------------------------
    node.find('.button4').click(function(){

    })
}
    addEl("Ferrari");
    addEl("Lamborgini");
    addEl("Renault");
});