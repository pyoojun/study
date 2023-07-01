//$('.after p:eq(2)').after('<p>after로 내용 추가</p>').css('background', 'yellow');
$('<p>after로 내용 추가</p>').insertAfter('.after p:eq(2)').css('background', 'yellow');

$('.after p:eq(0)').before('<p>after로 내용 추가</p>').css('background', 'skyblue');
$('<p>insertBefore</p>').insertBefore('.after p:eq(0)').css('background', 'pink');

//append/appentTo/prepend/perpendTO
const basket=$('#basket')
const apple=$('#apple')
const banana=$('#banana')
const orange=$('#orange')

/* basket.append(apple)
basket.append(orange) */

//apple.appendTo(basket)

basket.prepend(apple)

$('.content3').hover(function(){
    $('#div1').show();
    $('#div2').hide();
},function({
    $('#div1').hide();
    $('#div2').show();
})

//toggle 
$('#btn').on('click', function(){
    $('img').toggle();
});

// fadeIn/fadeOut/fadeTo
// $('#fade1').fadeIn(2000);
$('.container').mouseover(function(){
    $('#fade1').fadeIn(2000);
})