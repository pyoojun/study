//$('.after p:eq(2)').after('<p>after로 내용 추가</p>').css('background','yellow');
$('<p>insertAfter로 내용 추가</p>').insertAfter('.after p:eq(2)').css('background','yellow');

$('.after p:eq(0)').before('<p>before로 내용 추가</p>').css('background','skyblue');
$('<p>insertBefore로 내용 추가</p>').insertBefore('.after p:eq(1)').css('background','pink');

//append/appendTo/prepend/perpendTo
const basket=$('#basket')
const apple=$('#apple')
const banana=$('#banana')
const orange=$('#orange')

/* basket.append(apple)
basket.append(orange) */

/* apple.appendTo(basket) */
basket.prepend(apple)

$('.content3').hover(function(){
    $('#div1').show();
    $('#div2').hide();
},function(){
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
$('#fade2').fadeOut(2000);
$('#fade3').fadetO(2000, 0.3);

// slideDown/slideUp
$('#slide1').slideDown(2000);
$('#slide2').slideUp(2000);

$('.content6 .container').hover(function(){
    $('#slide3').slideUp(2000);
},function({
    $('#slide3').slideDown(2000);
}));

/*animate*/
$('.box1').animate({left:800, top:320},500);